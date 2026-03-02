import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Gameinside',
  description: 'Neem contact op met de redactie van Gameinside. Vragen, persberichten, correcties of samenwerkingen? We horen graag van je.',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="gi-section-title text-lg font-black text-[#e6edf3] uppercase tracking-wide">
      <span className="gi-section-title-bar" />
      {children}
    </h2>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="gi-card p-5 flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#00aaff]/10 border border-[#00aaff]/20 flex items-center justify-center shrink-0 text-[#00aaff]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-1">{title}</p>
        <div className="text-sm text-[#e6edf3]">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      {/* Hero */}
      <div className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-[#00aaff] bg-[#00aaff]/10 border border-[#00aaff]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Redactie
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#e6edf3] mb-3">
              Contact
            </h1>
            <p className="text-[#8b949e] text-base leading-relaxed">
              Heb je een vraag, tip of opmerking? De redactie van Gameinside staat voor je klaar.
              Vul het formulier in en we reageren zo snel mogelijk.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: form */}
          <div className="lg:col-span-2 space-y-8">

            {/* Contact form */}
            <section>
              <SectionTitle>Stuur een bericht</SectionTitle>
              <div className="gi-card p-6">
                <ContactForm />
              </div>
            </section>

            {/* Persberichten */}
            <section>
              <SectionTitle>Persberichten</SectionTitle>
              <div className="gi-card p-6 space-y-3">
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  Ben je PR-manager of werk je voor een gamestudio? Stuur persberichten, review-copies en
                  uitnodigingen direct naar{' '}
                  <a href="mailto:redactie@gameinside.nl" className="text-[#00aaff] hover:underline">
                    redactie@gameinside.nl
                  </a>.
                </p>
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  We behandelen elk persbericht serieus en publiceren wanneer het nieuws relevant is voor onze lezers.
                  Vermeld altijd een embargo-datum als die van toepassing is.
                </p>
                <div className="flex items-start gap-3 bg-[#00aaff]/5 border border-[#00aaff]/15 rounded-lg p-4 mt-2">
                  <svg className="w-4 h-4 text-[#00aaff] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-[#8b949e] leading-relaxed">
                    Gebruik het onderwerp <strong className="text-[#e6edf3]">"Persbericht"</strong> of{' '}
                    <strong className="text-[#e6edf3]">"Review copy"</strong> in de e-mailonderwerpregel zodat we
                    je bericht snel kunnen verwerken.
                  </p>
                </div>
              </div>
            </section>

            {/* Juridisch */}
            <section>
              <SectionTitle>Juridisch &amp; Privacy</SectionTitle>
              <div className="gi-card p-6">
                <p className="text-sm text-[#8b949e] leading-relaxed">
                  Voor juridische kwesties, auteursrechtclaims, verwijderverzoeken of privacygerelateerde vragen
                  kun je contact opnemen via{' '}
                  <a href="mailto:redactie@gameinside.nl" className="text-[#00aaff] hover:underline">
                    redactie@gameinside.nl
                  </a>{' '}
                  met de vermelding <em>Juridisch</em> in het onderwerp. We streven ernaar binnen 5 werkdagen
                  te reageren op dergelijke verzoeken.
                </p>
              </div>
            </section>
          </div>

          {/* Right: info cards */}
          <aside className="space-y-4">
            <SectionTitle>Contactinfo</SectionTitle>

            <InfoCard
              title="E-mail"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            >
              <a href="mailto:redactie@gameinside.nl" className="text-[#00aaff] hover:underline">
                redactie@gameinside.nl
              </a>
            </InfoCard>

            <InfoCard
              title="Reactietijd"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              Binnen 2 werkdagen
            </InfoCard>

            <InfoCard
              title="Locatie"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              Nederland
            </InfoCard>

            <InfoCard
              title="Adverteren"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              }
            >
              <a href="/adverteren" className="text-[#00aaff] hover:underline">
                Bekijk advertentiemogelijkheden
              </a>
            </InfoCard>

            {/* Response time note */}
            <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl p-4 mt-2">
              <p className="text-xs text-[#8b949e] leading-relaxed">
                <span className="text-[#7c3aed] font-semibold">Let op:</span> Gameinside is een redactioneel
                onafhankelijk medium. Alle publicatiebeslissingen worden gemaakt op basis van nieuwswaarde,
                niet op basis van commerciële belangen.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
