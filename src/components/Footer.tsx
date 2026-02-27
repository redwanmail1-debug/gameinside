import Link from 'next/link';

const footerLinks = {
  Categorieën: [
    { href: '/categorie/nieuws',   label: 'Nieuws' },
    { href: '/categorie/reviews',  label: 'Reviews' },
    { href: '/categorie/games',    label: 'Games' },
    { href: '/categorie/tech',     label: 'Tech' },
    { href: '/categorie/hardware', label: 'Hardware' },
    { href: '/categorie/video',    label: 'Video' },
  ],
  Platform: [
    { href: '#', label: 'PlayStation' },
    { href: '#', label: 'Xbox' },
    { href: '#', label: 'Nintendo' },
    { href: '#', label: 'PC Gaming' },
    { href: '#', label: 'Mobile' },
  ],
  Redactie: [
    { href: '#', label: 'Over Gameinside' },
    { href: '#', label: 'Redactieteam' },
    { href: '#', label: 'Adverteren' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Privacy' },
  ],
};

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    discord: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}

export default function Footer() {
  return (
    <footer className="bg-[#161b22] mt-16 relative">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-[#7c3aed] via-[#00aaff] to-[#7c3aed]" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 mb-3 group">
              <span className="text-[#00aaff] font-black text-xl tracking-tight group-hover:text-[#33bbff] transition-colors">GAME</span>
              <span className="text-white font-black text-xl tracking-tight">INSIDE</span>
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
            </Link>
            <p className="text-sm text-[#8b949e] leading-relaxed mb-4">
              Jouw Nederlandse bron voor gaming nieuws, reviews en de beste tech. Dagelijks bijgewerkt door een team van gepassioneerde gamers.
            </p>
            <div className="flex gap-2">
              {['twitter', 'instagram', 'youtube', 'discord'].map((s) => (
                <a
                  key={s} href="#"
                  className="w-8 h-8 bg-[#1c2333] border border-[#30363d] rounded-lg flex items-center justify-center
                             text-[#8b949e] hover:text-[#00aaff] hover:border-[#00aaff]/40
                             hover:bg-[#00aaff]/5 transition-all"
                  aria-label={s}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-black text-[#e6edf3] uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm text-[#8b949e] hover:text-[#00aaff] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#30363d]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#555e6b]">© 2025 Gameinside. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            {['Privacy', 'Cookies', 'Disclaimer'].map((l) => (
              <Link key={l} href="#" className="text-xs text-[#555e6b] hover:text-[#00aaff] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
