import { Article } from '@/data/articles';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  title?: string;
}

export default function ArticleGrid({ articles, title }: ArticleGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {title && (
        <div className="gi-section-title">
          <div className="gi-section-title-bar" />
          <h2 className="text-xl font-black text-white uppercase tracking-wide">{title}</h2>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
