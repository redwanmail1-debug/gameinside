'use client';

import { useState } from 'react';

const ONDERWERPEN = [
  'Algemene vraag',
  'Persbericht insturen',
  'Foutmelding of correctie',
  'Samenwerking',
  'Technisch probleem',
  'Overig',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [onderwerp, setOnderwerp] = useState('');
  const [bericht, setBericht] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/email/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email, onderwerp, bericht }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Verzenden mislukt.');
      }

      setStatus('success');
      setNaam('');
      setEmail('');
      setOnderwerp('');
      setBericht('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Er is iets misgegaan. Probeer het opnieuw.');
    }
  };

  const inputClass =
    'w-full bg-[#1c2333] border border-[#30363d] text-[#e6edf3] rounded-lg px-4 py-2.5 text-sm focus:border-[#00aaff]/60 focus:outline-none transition-colors placeholder:text-[#555e6b]';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            Naam <span className="text-[#00aaff]">*</span>
          </label>
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Je naam"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            E-mailadres <span className="text-[#00aaff]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@email.nl"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
          Onderwerp <span className="text-[#00aaff]">*</span>
        </label>
        <select
          value={onderwerp}
          onChange={(e) => setOnderwerp(e.target.value)}
          required
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>Selecteer een onderwerp</option>
          {ONDERWERPEN.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
          Bericht <span className="text-[#00aaff]">*</span>
        </label>
        <textarea
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          placeholder="Schrijf hier je bericht…"
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      {status === 'success' ? (
        <div className="text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-3 flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Bedankt! Je bericht is verstuurd. We reageren zo snel mogelijk.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="gi-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Versturen…' : 'Verstuur bericht'}
        </button>
      )}
    </form>
  );
}
