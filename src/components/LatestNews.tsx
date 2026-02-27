import Link from 'next/link';
import Image from 'next/image';
import { Article, categoryColors, categoryTextColors } from '@/data/articles';

function LatestNewsItem({ article, index }: { article: Article; index: number }) {
  const tagBg   = categoryColors[article.category]   ?? 'bg-blue-500';
  const tagText = categoryTextColors[article.category] ?? 'text-blue-400';

  return (
    <Link href={`/artikel/${article.slug}`} className="group block">
      <article className="flex gap-4 py-3.5 border-b border-[#30363d]/60 last:border-0
                          hover:bg-[#1c2333]/50 -mx-3 px-3 rounded-lg transition-colors">
        {/* Index number */}
        <div className="flex-shrink-0 w-7 text-right mt-0.5">
          <span className="text-2xl font-black text-[#30363d] leading-none tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Thumbnail */}
        <div className="relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden ring-1 ring-[#30363d]/60">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="80px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            {article.isBreaking && (
              <span className="px-1.5 py-0.5 text-xs font-black uppercase rounded bg-red-600 text-white">
                Breaking
              </span>
            )}
            <span className={`px-1.5 py-0.5 text-xs font-bold uppercase rounded text-white ${tagBg}`}>
              {article.categoryLabel}
            </span>
          </div>
          <h3 className="text-sm font-bold text-[#e6edf3] group-hover:text-[#00aaff]
                         transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-[#555e6b]">
            <span className={`font-semibold ${tagText}`}>{article.author}</span>
            <span>·</span>
            <span>
              {new Date(article.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function LatestNews({ articles }: { articles: Article[] }) {
  return (
    <div>
      <div className="gi-section-title">
        <div className="gi-section-title-bar" />
        <h2 className="text-xl font-black text-white uppercase tracking-wide">Laatste Nieuws</h2>
      </div>
      <div>
        {articles.map((article, i) => (
          <LatestNewsItem key={article.id} article={article} index={i} />
        ))}
      </div>
    </div>
  );
}
