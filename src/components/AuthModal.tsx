'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

type Mode = 'login' | 'register' | 'forgot';

interface Props {
  onClose: () => void;
  initialMode?: Mode;
}

export default function AuthModal({ onClose, initialMode = 'login' }: Props) {
  const [mode, setMode]       = useState<Mode>(initialMode);
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');
  const [busy, setBusy]       = useState(false);

  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setBusy(true);

    try {
      if (mode === 'login') {
        await signIn(email, password);
        onClose();
      } else if (mode === 'register') {
        if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
          setError('Gebruikersnaam: 3-20 tekens, alleen letters en cijfers.');
          setBusy(false);
          return;
        }
        if (password.length < 8) {
          setError('Wachtwoord moet minimaal 8 tekens zijn.');
          setBusy(false);
          return;
        }
        await signUp(email, password, username);
        setSuccess('Check je email om je account te bevestigen!');
      } else {
        await resetPassword(email);
        setSuccess('We hebben een herstelmail gestuurd!');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Er ging iets mis. Probeer opnieuw.';
      setError(msg);
    } finally {
      setBusy(false);
    }
  };

  const titles: Record<Mode, string> = {
    login:    'Inloggen',
    register: 'Gratis registreren',
    forgot:   'Wachtwoord vergeten',
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-md bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8b949e] hover:text-white transition-colors text-xl leading-none"
          aria-label="Sluiten"
        >
          ×
        </button>

        {/* Logo / title */}
        <div className="mb-6 text-center">
          <span className="text-2xl font-black text-[#00aaff]">Gameinside</span>
          <h2 className="text-white font-bold text-lg mt-1">{titles[mode]}</h2>
        </div>

        {/* Google button */}
        {mode !== 'forgot' && (
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg
                       bg-white text-[#0d1117] font-semibold text-sm hover:bg-gray-100
                       transition-colors mb-4"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
            {mode === 'login' ? 'Inloggen met Google' : 'Registreren met Google'}
          </button>
        )}

        {/* Divider */}
        {mode !== 'forgot' && (
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-[#30363d]" />
            <span className="text-xs text-[#8b949e]">of</span>
            <div className="flex-1 h-px bg-[#30363d]" />
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'register' && (
            <div>
              <label className="block text-xs text-[#8b949e] mb-1">Gebruikersnaam</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="GamerNaam123"
                required
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5
                           text-sm text-[#e6edf3] placeholder-[#555e6b]
                           focus:outline-none focus:border-[#00aaff] transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-xs text-[#8b949e] mb-1">E-mailadres</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jij@email.com"
              required
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5
                         text-sm text-[#e6edf3] placeholder-[#555e6b]
                         focus:outline-none focus:border-[#00aaff] transition-colors"
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <label className="block text-xs text-[#8b949e] mb-1">Wachtwoord</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimaal 8 tekens"
                required
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2.5
                           text-sm text-[#e6edf3] placeholder-[#555e6b]
                           focus:outline-none focus:border-[#00aaff] transition-colors"
              />
            </div>
          )}

          {error   && <p className="text-red-400 text-xs">{error}</p>}
          {success && <p className="text-green-400 text-xs">{success}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full py-2.5 rounded-lg bg-[#00aaff] hover:bg-[#0090dd] disabled:opacity-50
                       text-white font-bold text-sm transition-colors"
          >
            {busy ? 'Even geduld…' : titles[mode]}
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-4 text-center text-xs text-[#8b949e] space-y-1">
          {mode === 'login' && (
            <>
              <button onClick={() => setMode('forgot')} className="hover:text-[#00aaff] transition-colors block w-full">
                Wachtwoord vergeten?
              </button>
              <span>
                Nog geen account?{' '}
                <button onClick={() => setMode('register')} className="text-[#00aaff] font-semibold hover:underline">
                  Registreer gratis
                </button>
              </span>
            </>
          )}
          {mode === 'register' && (
            <span>
              Al een account?{' '}
              <button onClick={() => setMode('login')} className="text-[#00aaff] font-semibold hover:underline">
                Inloggen
              </button>
            </span>
          )}
          {mode === 'forgot' && (
            <button onClick={() => setMode('login')} className="text-[#00aaff] font-semibold hover:underline">
              Terug naar inloggen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
