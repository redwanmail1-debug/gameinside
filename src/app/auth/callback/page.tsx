'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Supabase's detectSessionInUrl (true by default) automatically exchanges
    // the PKCE code from the URL for a session. Once done, onAuthStateChange
    // fires SIGNED_IN. We listen and then redirect to the home page.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        router.replace('/');
      }
    });

    // Fallback: if the auth event never fires (e.g. link already used),
    // redirect home after 4 seconds so the user isn't stuck.
    const timer = setTimeout(() => router.replace('/'), 4000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center gap-4">
      <span className="text-3xl font-black">
        <span className="text-[#00aaff]">GAME</span>
        <span className="text-white">INSIDE</span>
      </span>
      <p className="text-[#8b949e] text-sm animate-pulse">Account bevestigen…</p>
    </div>
  );
}
