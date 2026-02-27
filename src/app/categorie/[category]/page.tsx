import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getArticlesByCategory, getMostRead, categoryLabels, Category,
  categoryColors, categoryTextColors,
} from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

interface Props { params: { category: string } }

const validCategories = ['nieuws', 'reviews', 'games', 'tech', 'hardware', 'video'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!validCategories.includes(params.category)) return { title: 'Categorie niet gevonden' };
  const label = categoryLabels[params.category as Category];
  return {
    title: `${label} – Gameinside`,
    description: `Het laatste ${label.toLowerCase()} nieuws op Gameinside — jouw Nederlandse gaming en tech platform.`,
  };
}

const categoryDescriptions: Record<Category, string> = {
  nieuws:   'Blijf op de hoogte van het laatste gaming nieuws uit de hele wereld.',
  reviews:  'Onze eerlijke en uitgebreide reviews van de nieuwste games en hardware.',
  games:    'Alles over nieuwe en aankomende games voor alle platforms.',
  tech:     'De nieuwste ontwikkelingen in gaming-technologie en de tech-industrie.',
  hardware: "Reviews en nieuws over gaming hardware: GPU's, consoles, monitoren en meer.",
  video:    'De beste gaming video\'s, trailers, gameplay en meer.',
};

export default function CategoryPage({ params }: Props) {
  if (!validCategories.includes(params.category)) notFound();

  const category = params.category as Category;
  const label    = categoryLabels[category];
  const tagBg    = categoryColors[category]   ?? 'bg-blue-500';
  const tagText  = categoryTextColors[category] ?? 'text-blue-400';
  const categoryArticles = getArticlesByCategory(category);
  const mostRead = getMostRead();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#555e6b] mb-6">
        <Link href="/" className="hover:text-[#00aaff] transition-colors">Home</Link>
        <span className="text-[#30363d]">›</span>
        <span className={`font-semibold ${tagText}`}>{label}</span>
      </nav>

      {/* Category header */}
      <div className="mb-8 pb-6 border-b border-[#30363d]/60">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-2 h-10 rounded-full ${tagBg}`} />
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide">{label}</h1>
        </div>
        <p className="text-[#8b949e] text-sm ml-5">
          {categoryDescriptions[category]}
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {validCategories.map((cat) => {
          const isActive = cat === category;
          const pillBg   = categoryColors[cat as Category] ?? 'bg-blue-500';
          return (
            <Link
              key={cat}
              href={`/categorie/${cat}`}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                isActive
                  ? `${pillBg} text-white shadow-lg`
                  : 'bg-[#1c2333] border border-[#30363d] text-[#8b949e] hover:border-[#00aaff]/40 hover:text-[#00aaff]'
              }`}
            >
              {categoryLabels[cat as Category]}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="lg:col-span-2">
          {categoryArticles.length === 0 ? (
            <div className="text-center py-20 bg-[#1c2333] rounded-xl border border-[#30363d]">
              <div className="text-6xl mb-4">🎮</div>
              <h2 className="text-xl font-bold text-white mb-2">Nog geen artikelen</h2>
              <p className="text-[#8b949e] mb-6 text-sm">Er zijn nog geen artikelen in deze categorie. Kom snel terug!</p>
              <Link href="/" className="gi-btn-primary">Terug naar home</Link>
            </div>
          ) : (
            <>
              <p className="text-xs text-[#555e6b] uppercase tracking-wider mb-5 font-semibold">
                {categoryArticles.length} artikel{categoryArticles.length !== 1 ? 'en' : ''} gevonden
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <Sidebar mostRead={mostRead} />
          </div>
        </div>
      </div>
    </div>
  );
}
