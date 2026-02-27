import Link from 'next/link';
import Image from 'next/image';
import { Article, categoryColors, categoryTextColors } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
  size?: 'default' | 'large' | 'small';
}

export default function ArticleCard({ article, size = 'default' }: ArticleCardProps) {
  const imageHeight =
    size === 'large' ? 'h-56 md:h-72' :
    size === 'small' ? 'h-36' : 'h-48';

  const tagBg   = categoryColors[article.category]   ?? 'bg-blue-500';
  const tagText = categoryTextColors[article.category] ?? 'text-blue-400';

  return (
    <Link href={`/artikel/${article.slug}`} className="group block h-full">
      <article className="gi-card h-full flex flex-col relative">
        {/* Colored left border accent */}
        <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl ${tagBg} opacity-70`} />

        {/* Image */}
        <div className={`relative ${imageHeight} overflow-hidden flex-shrink-0`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Tags */}
          <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
            {article.isBreaking && (
              <span className="px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded-md bg-red-600 text-white shadow-lg">
                Breaking
              </span>
            )}
            <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-md text-white shadow-lg ${tagBg}`}>
              {article.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className={`font-bold text-white group-hover:text-[#00aaff] transition-colors leading-snug mb-2 ${
            size === 'large' ? 'text-xl md:text-2xl' :
            size === 'small' ? 'text-sm' : 'text-base'
          }`}>
            {article.title}
          </h2>

          {size !== 'small' && (
            <p className="text-[#8b949e] text-sm line-clamp-2 mb-3 flex-1 leading-relaxed">
              {article.excerpt}
            </p>
          )}

          {/* Score badge */}
          {article.score && (
            <div className="flex items-center gap-1 mb-2">
              <span className="px-2 py-0.5 text-xs font-black rounded-md bg-[#7c3aed]/20 border border-[#7c3aed]/40 text-purple-300">
                {article.score}/10
              </span>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-[#555e6b] mt-auto pt-2 border-t border-[#30363d]/60">
            <span className={`font-semibold ${tagText}`}>{article.author}</span>
            <span className="text-[#8b949e]">
              {new Date(article.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
