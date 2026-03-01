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
      const profile = user ? await fetchProfile(user.id) : null;
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
  }, [fetchProfile]);

  // ── Registratie via server (geen dubbele Supabase-mail) ─────────────────

  const signUp = async (email: string, password: string, username: string) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Registratie mislukt. Probeer het opnieuw.');

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
      const data = await res.json();
      throw new Error(data.error || 'Reset mislukt. Probeer het opnieuw.');
    }
  };

  return { ...state, signUp, signIn, signInWithGoogle, signOut, resetPassword };
}
