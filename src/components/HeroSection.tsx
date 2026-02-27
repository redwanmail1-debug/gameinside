import Link from 'next/link';
import { Article, categoryColors } from '@/data/articles';
import ImageWithFallback from '@/components/ImageWithFallback';

interface HeroSectionProps {
  article: Article;
}

export default function HeroSection({ article }: HeroSectionProps) {
  const tagColor = categoryColors[article.category] ?? 'bg-blue-500';

  return (
    <section className="relative w-full h-[72vh] min-h-[500px] max-h-[760px] overflow-hidden">
      {/* Background image */}
      <ImageWithFallback
        src={article.image}
        alt={article.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        category={article.category}
      />

      {/* Multi-layer gradient overlay — purple-to-blue tint + bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/70 via-[#0d1117]/40 to-[#00aaff]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/50 to-transparent" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14 max-w-5xl">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3">
          {article.isBreaking && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded-md bg-red-600 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
              Breaking
            </span>
          )}
          <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-md text-white ${tagColor}`}>
            {article.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <Link href={`/artikel/${article.slug}`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight
                         hover:text-[#00aaff] transition-colors mb-3 drop-shadow-lg max-w-4xl">
            {article.title}
          </h1>
        </Link>

        {/* Excerpt */}
        <p className="text-[#c8d3e0] text-sm md:text-base max-w-2xl mb-5 line-clamp-2 drop-shadow">
          {article.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8b949e] mb-5">
          <span className="font-semibold text-[#c8d3e0]">{article.author}</span>
          <span>
            {new Date(article.date).toLocaleDateString('nl-NL', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>
          <span>{article.readTime} min leestijd</span>
        </div>

        <Link href={`/artikel/${article.slug}`} className="gi-btn-primary">
          Lees het volledige artikel →
        </Link>
      </div>
    </section>
  );
}
