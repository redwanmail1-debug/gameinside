import type { Metadata } from 'next';
import AdverterenForm from '@/components/AdverterenForm';

export const metadata: Metadata = {
  title: 'Adverteren | Gameinside',
  description: 'Bereik duizenden Nederlandse gamers via Gameinside. Ontdek onze advertentiemogelijkheden: display advertenties, gesponsorde artikelen, productreviews en meer.',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="gi-section-title text-lg font-black text-[#e6edf3] uppercase tracking-wide">
      <span className="gi-section-title-bar" />
      {children}
    </h2>
  );
}

const USP_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Gerichte doelgroep',
    desc: 'Jouw merk direct voor Nederlandse gamers van 16–35 jaar, gepassioneerd en koopbereid.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Meetbare resultaten',
    desc: 'Volledige transparantie met bereik- en klikstatistieken na afloop van elke campagne.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Kwalitatieve content',
    desc: 'Gesponsorde content geschreven door onze redacteurs: authentiek, informatief en aansluitend op de lezers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexibel budget',
    desc: 'Pakketten voor elk budget, van kleine studio tot groot publisher. Maatwerk is altijd mogelijk.',
  },
];

const MOGELIJKHEDEN = [
  {
    naam: 'Display advertentie',
    omschrijving: 'Banner op homepage en artikelpagina\'s',
    formaten: '728×90, 300×250, 160×600',
    indicatie: 'Vanaf €199/maand',
    accent: '#00aaff',
  },
  {
    naam: 'Gesponsord artikel',
    omschrijving: 'Redactioneel artikel met "gesponsord" label, gedeeld via social media',
    formaten: '600–1000 woorden + beelden',
    indicatie: 'Vanaf €349',
    accent: '#7c3aed',
  },
  {
    naam: 'Productreview',
    omschrijving: 'Eerlijke review van jouw game of product door onze redactie',
    formaten: 'Standaard reviewformat',
    indicatie: 'Prijs op aanvraag',
    accent: '#00aaff',
  },
  {
    naam: 'Nieuwsbrief',
    omschrijving: 'Logo + korte tekst in onze wekelijkse nieuwsbrief',
    formaten: '150×50 logo + 50 woorden',
    indicatie: 'Vanaf €149/editie',
    accent: '#7c3aed',
  },
  {
    naam: 'Social media',
    omschrijving: 'Campagnepost op Instagram, X en/of Discord',
    formaten: 'Per platform',
    indicatie: 'Vanaf €99/post',
    accent: '#00aaff',
  },
  {
    naam: 'Pakketdeal',
    omschrijving: 'Combinatie van bovenstaande opties met korting',
    formaten: 'Maatwerk',
    indicatie: 'In overleg',
    accent: '#7c3aed',
  },
];

const STAPPEN = [
  { nr: '01', titel: 'Aanvraag', tekst: 'Vul het formulier in met je wensen en budget. We nemen binnen 2 werkdagen contact op.' },
  { nr: '02', titel: 'Voorstel', tekst: 'We sturen een persoonlijk voorstel op maat, afgestemd op jouw doelstellingen.' },
  { nr: '03', titel: 'Akkoord', tekst: 'Na akkoord op het voorstel plannen we de campagne in en verwerken we de betaling.' },
  { nr: '04', titel: 'Live', tekst: 'Jouw campagne gaat live. Na afloop ontvang je een rapportage met de resultaten.' },
];

export default function AdverterenPage() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      {/* Hero */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-[#7c3aed] bg-[#7c3aed]/10 border border-[#7c3aed]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Partners
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#e6edf3] mb-3">
              Adverteren op Gameinside
            </h1>
            <p className="text-[#8b949e] text-base leading-relaxed">
              Bereik een gepassioneerde gaming community via Nederland&apos;s groeiende gaming nieuwsplatform.
              Flexibele pakketten voor elk budget — van display advertenties tot diepgaande gesponsorde content.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">

        {/* Waarom adverteren */}
        <section>
          <SectionTitle>Waarom adverteren op Gameinside?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USP_ITEMS.map((item) => (
              <div key={item.title} className="gi-card p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#00aaff]/10 border border-[#00aaff]/20 flex items-center justify-center text-[#00aaff]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#e6edf3] mb-1">{item.title}</p>
                  <p className="text-xs text-[#8b949e] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advertentiemogelijkheden */}
        <section>
          <SectionTitle>Advertentiemogelijkheden</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOGELIJKHEDEN.map((m) => (
              <div key={m.naam} className="gi-card p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-sm text-[#e6edf3]">{m.naam}</p>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{
                      color: m.accent,
                      background: `${m.accent}15`,
                      border: `1px solid ${m.accent}30`,
                    }}
                  >
                    {m.indicatie}
                  </span>
                </div>
                <p className="text-xs text-[#8b949e] leading-relaxed">{m.omschrijving}</p>
                <p className="text-xs text-[#555e6b]">
                  <span className="text-[#8b949e]">Formaat:</span> {m.formaten}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#555e6b] mt-3">
            * Alle prijzen zijn exclusief BTW en indicatief. Definitieve prijzen worden vastgesteld in het persoonlijk voorstel.
          </p>
        </section>

        {/* Samenwerking stappen */}
        <section>
          <SectionTitle>Hoe werkt het?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STAPPEN.map((s) => (
              <div key={s.nr} className="gi-card p-5">
                <span className="text-3xl font-black text-[#00aaff]/20 leading-none">{s.nr}</span>
                <p className="font-bold text-sm text-[#e6edf3] mt-1 mb-2">{s.titel}</p>
                <p className="text-xs text-[#8b949e] leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formulier */}
        <section>
          <SectionTitle>Aanvraagformulier</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="gi-card p-6">
                <AdverterenForm />
              </div>
            </div>
            <aside className="space-y-4">
              <div className="gi-card p-5">
                <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Direct contact</p>
                <p className="text-sm text-[#8b949e] mb-3">
                  Liever direct mailen? Stuur je aanvraag naar:
                </p>
                <a
                  href="mailto:redactie@gameinside.nl"
                  className="text-sm text-[#00aaff] hover:underline break-all"
                >
                  redactie@gameinside.nl
                </a>
              </div>

              {/* Redactionele onafhankelijkheid */}
              <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl p-5">
                <p className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider mb-2">
                  Redactionele onafhankelijkheid
                </p>
                <p className="text-xs text-[#8b949e] leading-relaxed">
                  Gameinside is een onafhankelijk medium. Gesponsorde content wordt altijd duidelijk gelabeld.
                  Advertentierelaties hebben geen invloed op onze redactionele beoordelingen of nieuwsberichtgeving.
                  Wij behouden altijd het recht om content te weigeren die niet aansluit bij onze waarden of lezers.
                </p>
              </div>
            </aside>
          </div>
        </section>

      </div>
    </main>
  );
}
