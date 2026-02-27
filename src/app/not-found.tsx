import Link from 'next/link';
import type { Metadata } from 'next';
import { categoryLabels, Category } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden',
  description: 'De pagina die je zoekt bestaat niet (meer). Ga terug naar Gameinside voor het laatste gaming nieuws.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">

      {/* 404 number */}
      <div className="mb-4 text-[9rem] font-black leading-none text-transparent
                      bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#7c3aed] select-none">
        404
      </div>

      <h1 className="text-3xl font-black text-white mb-4">
        Pagina niet gevonden
      </h1>
      <p className="text-[#8b949e] text-base mb-10 max-w-md mx-auto leading-relaxed">
        De pagina die je zoekt bestaat niet of is verplaatst.
        Misschien zoek je een van onze nieuwste artikelen?
      </p>

      {/* Primary actions */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Link href="/" className="gi-btn-primary">
          Terug naar home
        </Link>
        <Link
          href="/categorie/nieuws"
          className="px-5 py-2.5 text-sm font-bold rounded-xl border border-[#30363d]
                     text-[#8b949e] hover:border-[#00aaff]/50 hover:text-[#00aaff]
                     hover:bg-[#00aaff]/5 transition-all"
        >
          Laatste nieuws
        </Link>
        <Link
          href="/categorie/reviews"
          className="px-5 py-2.5 text-sm font-bold rounded-xl border border-[#30363d]
                     text-[#8b949e] hover:border-[#7c3aed]/50 hover:text-[#7c3aed]
                     hover:bg-[#7c3aed]/5 transition-all"
        >
          Reviews
        </Link>
      </div>

      {/* Category grid */}
      <div className="bg-[#1c2333] rounded-xl border border-[#30363d] p-6">
        <h2 className="text-xs font-black text-[#555e6b] uppercase tracking-widest mb-5">
          Blader per categorie
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {(Object.entries(categoryLabels) as [Category, string][]).map(([cat, label]) => (
            <Link
              key={cat}
              href={`/categorie/${cat}`}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg
                         bg-[#161b22] border border-[#30363d] text-[#8b949e]
                         hover:border-[#00aaff]/40 hover:text-[#00aaff] transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
