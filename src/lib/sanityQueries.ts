import { sanityClient } from './sanity';
import type { Article, Category } from '@/data/articles';
import { categoryLabels } from '@/data/articles';

// Raw shape returned by GROQ
interface SanityRawArticle {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: any[];       // Portable Text blocks
  mainImage?: string;    // resolved URL via asset->url
  category: string;
  author?: string;
  publishedAt?: string;
  featured?: boolean;
  readTime?: number;
}

// GROQ query — fetches all published articles, newest first
const ARTICLES_QUERY = `
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    content,
    "mainImage": mainImage.asset->url,
    category,
    author,
    publishedAt,
    featured,
    readTime
  }
`;

// Single article by slug
const ARTICLE_BY_SLUG_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    title,
    excerpt,
    content,
    "mainImage": mainImage.asset->url,
    category,
    author,
    publishedAt,
    featured,
    readTime
  }
`;

// Map a Sanity article to the unified Article type used across the app
function mapToArticle(raw: SanityRawArticle, index: number): Article {
  const category = (raw.category ?? 'nieuws') as Category;
  return {
    // IDs 10000+ to avoid collisions with the 1-20 hardcoded articles
    id: 10000 + index,
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt ?? '',
    content: '',                   // placeholder; use portableContent for rendering
    portableContent: raw.content,  // Portable Text blocks
    category,
    categoryLabel: categoryLabels[category] ?? category,
    author: raw.author ?? 'Gameinside Redactie',
    date: raw.publishedAt ? raw.publishedAt.split('T')[0] : new Date().toISOString().split('T')[0],
    image: raw.mainImage ?? '',
    isFeatured: raw.featured ?? false,
    readTime: raw.readTime ?? 5,
  };
}

export async function fetchSanityArticles(): Promise<Article[]> {
  if (!sanityClient) return [];
  try {
    const raw: SanityRawArticle[] = await sanityClient.fetch(ARTICLES_QUERY);
    return (raw ?? []).map(mapToArticle);
  } catch (err) {
    console.error('[Sanity] Failed to fetch articles:', err);
    return [];
  }
}

export async function fetchSanityArticleBySlug(slug: string): Promise<Article | null> {
  if (!sanityClient) return null;
  try {
    const raw: SanityRawArticle | null = await sanityClient.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
    if (!raw) return null;
    return mapToArticle(raw, 0);
  } catch (err) {
    console.error('[Sanity] Failed to fetch article by slug:', err);
    return null;
  }
}
