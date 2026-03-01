'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase, type Profile } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export interface AuthState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
}

const WELCOME_FLAG = 'gi_pending_welcome';

export function useAuth() {
  const [state, setState] = useState<AuthState>({ user: null, profile: null, loading: true });

  const fetchProfile = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return data as Profile | null;
  }, []);

  // Creates the profile if it doesn't exist yet.
  // Runs after SIGNED_IN so auth.uid() is set and RLS passes.
  const ensureProfile = useCallback(async (user: import('@supabase/supabase-js').User): Promise<Profile | null> => {
    const existing = await fetchProfile(user.id);
    if (existing) return existing;

    const username =
      (user.user_metadata?.username as string | undefined) ||
      user.email?.split('@')[0] ||
      `user_${user.id.slice(0, 8)}`;

    const { data } = await supabase
      .from('profiles')
      .insert({ id: user.id, username, avatar_url: null, comment_count: 0 })
      .select('*')
      .single();

    return data as Profile | null;
  }, [fetchProfile]);

  useEffect(() => {
    // Initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const user = session?.user ?? null;
      const profile = user ? await fetchProfile(user.id) : null;
      setState({ user, profile, loading: false });
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null;
      let profile: Profile | null = null;

      if (user) {
        // On SIGNED_IN ensure the profile exists (creates it if email confirmation
        // prevented the insert during signUp because session was null then).
        profile = _event === 'SIGNED_IN'
          ? await ensureProfile(user)
          : await fetchProfile(user.id);
      }

      setState({ user, profile, loading: false });

      // Stuur welkomstmail na eerste inlog (na e-mailbevestiging)
      if (user && _event === 'SIGNED_IN') {
        try {
          const raw = localStorage.getItem(WELCOME_FLAG);
          if (raw) {
            const { email, username, ts } = JSON.parse(raw) as {
              email: string;
              username: string;
              ts: number;
            };
            const sevenDays = 7 * 24 * 60 * 60 * 1000;
            if (Date.now() - ts < sevenDays) {
              localStorage.removeItem(WELCOME_FLAG);
              fetch('/api/email/welcome', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, username }),
              }).catch(() => {});
            } else {
              localStorage.removeItem(WELCOME_FLAG);
            }
          }
        } catch {
          // localStorage niet beschikbaar of JSON-fout → negeren
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchProfile, ensureProfile]);

  // ── Registratie ───────────────────────────────────────────────────────────

  const signUp = async (email: string, password: string, username: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        // Route the confirmation link through our callback page so the PKCE
        // code exchange happens on a clean page and the user isn't left hanging.
        emailRedirectTo: 'https://gameinside.nl/auth/callback',
      },
    });
    if (error) throw error;

    // Profile creation is handled by ensureProfile() in onAuthStateChange
    // (fires on SIGNED_IN). We can't insert here because when email
    // confirmation is enabled, signUp returns session: null and the RLS
    // policy blocks anonymous inserts. The username is stored in auth
    // metadata so ensureProfile() can read it later.

    // Sla vlag op voor welkomstmail na eerste inlog
    try {
      localStorage.setItem(
        WELCOME_FLAG,
        JSON.stringify({ email, username, ts: Date.now() }),
      );
    } catch {
      // localStorage niet beschikbaar → negeren
    }

    return data;
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.href },
    });
    if (error) throw error;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // ── Wachtwoord-reset via server (onze eigen e-mail) ───────────────────────

  const resetPassword = async (email: string) => {
    const res = await fetch('/api/email/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      let data: { error?: string } = {};
      try { data = await res.json(); } catch { /* non-JSON response */ }
      throw new Error(data.error || 'Reset mislukt. Probeer het opnieuw.');
    }
  };

  return { ...state, signUp, signIn, signInWithGoogle, signOut, resetPassword };
}
