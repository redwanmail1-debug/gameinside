import Link from 'next/link';
import { Article, categoryLabels, Category, categoryTextColors } from '@/data/articles';

interface SidebarProps {
  mostRead: Article[];
}

const rankColors = ['from-[#00aaff] to-[#7c3aed]', 'from-[#00aaff] to-[#0088cc]',
                    'from-[#7c3aed] to-[#5b21b6]', 'from-[#30363d] to-[#1c2333]', 'from-[#30363d] to-[#1c2333]'];

export default function Sidebar({ mostRead }: SidebarProps) {
  return (
    <aside className="space-y-5">

      {/* Most Read */}
      <div className="bg-[#1c2333] border border-[#30363d] rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d] flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#00aaff] to-[#7c3aed]" />
          <h3 className="text-sm font-black text-white uppercase tracking-wide">Meest gelezen</h3>
        </div>
        <div className="divide-y divide-[#30363d]/60">
          {mostRead.map((article, i) => {
            const textColor = categoryTextColors[article.category] ?? 'text-blue-400';
            return (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group flex gap-3 p-3.5 hover:bg-[#161b22]/80 transition-colors"
              >
                <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br ${rankColors[i]}
                                 flex items-center justify-center shadow-lg`}>
                  <span className="text-xs font-black text-white">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-[#e6edf3] group-hover:text-[#00aaff]
                                 transition-colors line-clamp-2 leading-snug mb-0.5">
                    {article.title}
                  </h4>
                  <p className={`text-xs font-medium ${textColor}`}>
                    {article.views.toLocaleString('nl-NL')} views
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Category pills */}
      <div className="bg-[#1c2333] border border-[#30363d] rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d] flex items-center gap-2">
          <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#7c3aed] to-[#00aaff]" />
          <h3 className="text-sm font-black text-white uppercase tracking-wide">Categorieën</h3>
        </div>
        <div className="p-3.5 flex flex-wrap gap-2">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <Link
              key={cat}
              href={`/categorie/${cat}`}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg
                         border border-[#30363d] text-[#8b949e]
                         hover:border-[#00aaff]/60 hover:text-[#00aaff] hover:bg-[#00aaff]/5
                         transition-all"
            >
              {categoryLabels[cat]}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-xl p-5 bg-gradient-to-br from-[#00aaff]/10 to-[#7c3aed]/10
                      border border-[#00aaff]/20">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00aaff] to-[#7c3aed] flex items-center justify-center flex-shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-sm font-black text-white uppercase tracking-wide">Newsletter</h3>
        </div>
        <p className="text-xs text-[#8b949e] mb-3 leading-relaxed">
          Het beste gaming nieuws dagelijks in je inbox.
        </p>
        <input
          type="email"
          placeholder="jouw@email.nl"
          className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2
                     text-sm text-white placeholder-[#555e6b]
                     focus:outline-none focus:border-[#00aaff] focus:shadow-[0_0_0_3px_rgba(0,170,255,0.1)]
                     transition-all mb-2"
        />
        <button className="w-full rounded-lg py-2 text-xs font-black uppercase tracking-wider text-white
                           bg-gradient-to-r from-[#00aaff] to-[#7c3aed]
                           hover:from-[#0088cc] hover:to-[#6d28d9]
                           transition-all shadow-[0_0_16px_rgba(0,170,255,0.2)]
                           hover:shadow-[0_0_24px_rgba(0,170,255,0.35)]">
          Inschrijven
        </button>
      </div>
    </aside>
  );
}
