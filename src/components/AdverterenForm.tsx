'use client';

import { useState } from 'react';

const SAMENWERKING_OPTIES = [
  'Display advertentie (banner)',
  'Gesponsord artikel',
  'Social media samenwerking',
  'Productreview',
  'Nieuwsbrief sponsoring',
  'Pakketdeal / maatwerk',
];

const BUDGET_OPTIES = [
  'Onder €500',
  '€500 – €1.000',
  '€1.000 – €2.500',
  '€2.500 – €5.000',
  'Meer dan €5.000',
  'In overleg',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AdverterenForm() {
  const [bedrijfsnaam, setBedrijfsnaam] = useState('');
  const [contactpersoon, setContactpersoon] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [samenwerking, setSamenwerking] = useState('');
  const [budget, setBudget] = useState('');
  const [toelichting, setToelichting] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/email/adverteren', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bedrijfsnaam, contactpersoon, email, telefoon, samenwerking, budget, toelichting }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Verzenden mislukt.');
      }

      setStatus('success');
      setBedrijfsnaam('');
      setContactpersoon('');
      setEmail('');
      setTelefoon('');
      setSamenwerking('');
      setBudget('');
      setToelichting('');
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
            Bedrijfsnaam <span className="text-[#00aaff]">*</span>
          </label>
          <input
            type="text"
            value={bedrijfsnaam}
            onChange={(e) => setBedrijfsnaam(e.target.value)}
            placeholder="Jouw bedrijf"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            Contactpersoon <span className="text-[#00aaff]">*</span>
          </label>
          <input
            type="text"
            value={contactpersoon}
            onChange={(e) => setContactpersoon(e.target.value)}
            placeholder="Voor- en achternaam"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            E-mailadres <span className="text-[#00aaff]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@bedrijf.nl"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            Telefoonnummer
          </label>
          <input
            type="tel"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            placeholder="+31 6 12345678"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            Type samenwerking <span className="text-[#00aaff]">*</span>
          </label>
          <select
            value={samenwerking}
            onChange={(e) => setSamenwerking(e.target.value)}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Selecteer type</option>
            {SAMENWERKING_OPTIES.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
            Budget <span className="text-[#00aaff]">*</span>
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Selecteer budget</option>
            {BUDGET_OPTIES.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1.5">
          Toelichting
        </label>
        <textarea
          value={toelichting}
          onChange={(e) => setToelichting(e.target.value)}
          placeholder="Vertel ons meer over je campagne, doelgroep of specifieke wensen…"
          rows={4}
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
          Bedankt! We nemen binnen 2 werkdagen contact met je op.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="gi-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Versturen…' : 'Stuur aanvraag'}
        </button>
      )}
    </form>
  );
}
