const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Jij bent een Nederlandse gaming journalist voor Gameinside.nl. Schrijf een boeiend gaming nieuwsartikel in het Nederlands. Gebruik natuurlijke Nederlandse spreektaal en gaming slang. Geen em dashes. Varieer zinslengtes. Schrijf voor Nederlandse gamers van 18-35.`;

const VALID_CATEGORIES = ['games', 'tech', 'hardware', 'nieuws', 'reviews'];

const YEAR = new Date().getFullYear();

async function writeArticle(newsItem) {
  const prompt = `Schrijf een artikel gebaseerd op dit nieuws:

Titel: ${newsItem.title}
Beschrijving: ${newsItem.description}
Bron: ${newsItem.source}
URL: ${newsItem.url}

Geef je antwoord ALLEEN als geldig JSON in dit exacte formaat, zonder extra tekst:
{
  "title": "SEO-vriendelijke Nederlandse titel met spelnaam + ${YEAR}",
  "slug": "url-vriendelijke-slug-zonder-spaties-of-hoofdletters",
  "excerpt": "Meta beschrijving van maximaal 150 tekens",
  "content": "400-600 woord artikel. Gebruik ## voor tussenkopjes. Gebruik **vetgedrukt** voor nadruk. Twee newlines tussen alineas.",
  "category": "games of tech of hardware of nieuws of reviews",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "readTime": 4
}`;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim();

  // Extract JSON — Claude sometimes wraps it in backticks
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`Geen JSON gevonden in Claude response: ${text.slice(0, 200)}`);

  const article = JSON.parse(jsonMatch[0]);

  // Sanitise category
  if (!VALID_CATEGORIES.includes(article.category)) {
    article.category = 'nieuws';
  }

  // Sanitise slug: lowercase, no spaces, only a-z 0-9 and hyphens
  article.slug = article.slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Trim excerpt to 150 chars
  if (article.excerpt && article.excerpt.length > 150) {
    article.excerpt = article.excerpt.slice(0, 147) + '...';
  }

  // Add [CONCEPT] prefix so editor can spot new drafts easily
  article.title = `[CONCEPT] ${article.title}`;

  // Keep source metadata for the notifier
  article.sourceUrl = newsItem.url;
  article.sourceName = newsItem.source;

  return article;
}

module.exports = { writeArticle };
