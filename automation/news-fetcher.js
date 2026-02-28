#!/usr/bin/env node
/**
 * Gameinside Daily News Agent
 * Fetches 5 gaming news items, rewrites them in Dutch, saves as Sanity drafts.
 *
 * Usage:
 *   node news-fetcher.js          (production run)
 *   node news-fetcher.js --test   (verbose output, skips email)
 */

const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const { RSS_FEEDS, GAMING_KEYWORDS } = require('./sources.js');
const { writeArticle } = require('./writer.js');
const { saveDraft } = require('./sanity-draft.js');
const { sendSuccess, sendFailure } = require('./notifier.js');

const IS_TEST = process.argv.includes('--test');
const MAX_ARTICLES = 5;
const MAX_AGE_HOURS = 48;
const DEDUP_DAYS = 7;

const PUBLISHED_TOPICS_PATH = path.join(__dirname, 'published-topics.json');
const FAILED_DRAFTS_DIR = path.join(__dirname, 'failed-drafts');
const NEW_ARTICLES_DIR = path.join(__dirname, '..', 'new articles');

// ── Save article as markdown file ─────────────────────────────────────────────

function saveArticleToFolder(article) {
  if (!fs.existsSync(NEW_ARTICLES_DIR)) fs.mkdirSync(NEW_ARTICLES_DIR, { recursive: true });

  const date = new Date().toISOString().split('T')[0];
  const filename = `${date}-${article.slug}.md`;
  const filepath = path.join(NEW_ARTICLES_DIR, filename);

  const markdown = `---
title: "${article.title}"
slug: "${article.slug}"
category: "${article.category}"
excerpt: "${article.excerpt}"
keywords: [${(article.keywords || []).map((k) => `"${k}"`).join(', ')}]
readTime: ${article.readTime || 4}
date: "${date}"
source: "${article.sourceName || ''}"
sourceUrl: "${article.sourceUrl || ''}"
status: draft
---

${article.content}
`;

  fs.writeFileSync(filepath, markdown, 'utf-8');
  return filename;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function log(msg) {
  console.log(msg);
}

/**
 * Simple word-overlap similarity to detect duplicate topics (0–1).
 */
function titleSimilarity(a, b) {
  const words = (str) =>
    new Set(
      str
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3)
    );
  const wa = words(a);
  const wb = words(b);
  const intersection = [...wa].filter((w) => wb.has(w));
  const union = new Set([...wa, ...wb]);
  return union.size === 0 ? 0 : intersection.size / union.size;
}

/**
 * Score a news item — higher = more relevant.
 * Factors: recency, keyword matches.
 */
function scoreItem(item) {
  let score = 0;
  const text = `${item.title} ${item.description}`.toLowerCase();

  // Recency: up to +48 points for a fresh item
  const ageHours = (Date.now() - item.date.getTime()) / 3_600_000;
  score += Math.max(0, MAX_AGE_HOURS - ageHours);

  // Gaming keyword matches
  GAMING_KEYWORDS.forEach((kw) => {
    if (text.includes(kw)) score += 5;
  });

  return score;
}

// ── RSS fetching ──────────────────────────────────────────────────────────────

async function fetchAllFeeds() {
  const parser = new Parser({ timeout: 12_000, headers: { 'User-Agent': 'Gameinside-Bot/1.0' } });
  const allItems = [];
  const usedFeeds = [];

  for (const feedUrl of RSS_FEEDS) {
    try {
      log(`📡 Fetching: ${feedUrl}`);
      const feed = await parser.parseURL(feedUrl);

      const items = (feed.items || []).slice(0, 20).map((item) => ({
        title: (item.title || '').trim(),
        description: (item.contentSnippet || item.summary || item.content || '').slice(0, 500).trim(),
        url: item.link || feedUrl,
        source: feed.title || feedUrl,
        date: item.pubDate ? new Date(item.pubDate) : new Date(),
      }));

      allItems.push(...items);
      usedFeeds.push(feed.title || feedUrl);
      log(`   ✓ ${items.length} items`);
    } catch (err) {
      log(`   ⚠️  Overgeslagen (${err.message})`);
    }
  }

  return { allItems, usedFeeds };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  log('🎮 Gameinside News Agent gestart...\n');
  if (IS_TEST) log('🧪 TEST MODE — email wordt overgeslagen\n');

  // Load and clean published-topics
  let publishedTopics = [];
  try {
    publishedTopics = JSON.parse(fs.readFileSync(PUBLISHED_TOPICS_PATH, 'utf-8'));
  } catch {
    publishedTopics = [];
  }

  const cutoff = new Date(Date.now() - DEDUP_DAYS * 24 * 3_600_000);
  const recentTopics = publishedTopics.filter((t) => new Date(t.date) > cutoff);
  const recentTitles = recentTopics.map((t) => t.title.toLowerCase());

  // Fetch feeds
  const { allItems, usedFeeds } = await fetchAllFeeds();
  log(`\n📦 Totaal ${allItems.length} items gevonden uit ${usedFeeds.length} feeds\n`);

  if (allItems.length === 0) {
    await sendFailure('Geen RSS items gevonden', 'Alle RSS feeds zijn mislukt of leeg.');
    process.exit(1);
  }

  // Filter and score
  const candidates = allItems
    .filter((item) => {
      if (!item.title) return false;

      // Skip old items
      const ageHours = (Date.now() - item.date.getTime()) / 3_600_000;
      if (ageHours > MAX_AGE_HOURS) return false;

      // Skip duplicates
      const isDuplicate = recentTitles.some(
        (t) => titleSimilarity(t, item.title.toLowerCase()) > 0.6
      );
      return !isDuplicate;
    })
    .map((item) => ({ ...item, score: scoreItem(item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ARTICLES);

  if (candidates.length === 0) {
    await sendFailure(
      'Geen geschikte items gevonden',
      'Alle items waren duplicaten, te oud of niet gaming-gerelateerd.'
    );
    process.exit(1);
  }

  log(`✅ ${candidates.length} items geselecteerd:\n`);
  candidates.forEach((item, i) => log(`  ${i + 1}. [score ${item.score.toFixed(0)}] ${item.title}`));
  log('');

  // Write articles and save to Sanity
  const savedArticles = [];

  for (const item of candidates) {
    log(`\n✍️  Schrijven: ${item.title}`);

    let article;

    // Write with one retry
    try {
      article = await writeArticle(item);
    } catch (firstErr) {
      log(`   ⚠️  Eerste poging mislukt (${firstErr.message}), opnieuw proberen...`);
      try {
        article = await writeArticle(item);
      } catch (retryErr) {
        log(`   ❌ Schrijven mislukt na retry: ${retryErr.message}`);
        continue;
      }
    }

    // Always save to 'new articles' folder
    const filename = saveArticleToFolder(article);
    log(`   📄 Opgeslagen: new articles/${filename}`);

    if (IS_TEST) {
      log('\n── ARTIKEL PREVIEW ──────────────────────────────');
      log(`Titel:    ${article.title}`);
      log(`Slug:     ${article.slug}`);
      log(`Categorie: ${article.category}`);
      log(`Excerpt:  ${article.excerpt}`);
      log(`Keywords: ${(article.keywords || []).join(', ')}`);
      log(`\nContent:\n${article.content.slice(0, 300)}...`);
      log('─────────────────────────────────────────────────\n');
    }

    // Save to Sanity (with fallback to local JSON)
    try {
      const docId = await saveDraft(article);
      log(`   💾 Sanity draft opgeslagen: ${docId}`);
      savedArticles.push(article);
      recentTopics.push({ title: item.title, date: new Date().toISOString() });
    } catch (sanityErr) {
      log(`   ❌ Sanity opslaan mislukt: ${sanityErr.message}`);
      log(`   📁 Backup naar failed-drafts/...`);

      if (!fs.existsSync(FAILED_DRAFTS_DIR)) fs.mkdirSync(FAILED_DRAFTS_DIR, { recursive: true });
      const filename = `${Date.now()}-${article.slug}.json`;
      fs.writeFileSync(
        path.join(FAILED_DRAFTS_DIR, filename),
        JSON.stringify(article, null, 2)
      );

      // Still include in email so editor knows it exists
      savedArticles.push(article);
    }
  }

  // Persist updated published-topics
  fs.writeFileSync(PUBLISHED_TOPICS_PATH, JSON.stringify(recentTopics, null, 2));

  log(`\n📋 Resultaat: ${savedArticles.length}/${candidates.length} artikelen succesvol verwerkt`);

  // Send notification
  if (savedArticles.length > 0) {
    if (!IS_TEST) {
      await sendSuccess(savedArticles, usedFeeds);
    } else {
      log('\n🧪 Test mode: email wordt overgeslagen.');
    }
  } else {
    await sendFailure(
      'Geen artikelen konden worden opgeslagen',
      'Zowel het schrijven als het opslaan is mislukt voor alle items.'
    );
  }

  log('\n🎉 Klaar!\n');
}

main().catch(async (err) => {
  console.error('\n💥 Fatale fout:', err.message);
  await sendFailure('Fatale fout in news agent', err.stack || err.message).catch(() => {});
  process.exit(1);
});
