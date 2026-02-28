const RSS_FEEDS = [
  'https://feeds.tweakers.net/tweakers/mixed.xml',
  'https://www.nu.nl/rss/games',
  'https://www.gamer.nl/feed',
  'https://www.eurogamer.net/?format=rss',
  'https://feeds.feedburner.com/ign/games',
  'https://store.steampowered.com/feeds/news/',
  'https://www.nintendo.com/nl-nl/rss.xml',
];

// Keywords that boost an item's score
const GAMING_KEYWORDS = [
  'game', 'gaming', 'playstation', 'xbox', 'nintendo', 'steam', 'pc',
  'release', 'trailer', 'review', 'dlc', 'update', 'patch', 'fps', 'rpg',
  'esport', 'console', 'ps5', 'switch', 'gpu', 'nvidia', 'amd', 'intel',
  'capcom', 'ubisoft', 'ea', 'activision', 'bethesda', 'rockstar', 'sony',
  'microsoft', 'valve', 'epic', 'riot', 'blizzard', 'cd projekt',
];

module.exports = { RSS_FEEDS, GAMING_KEYWORDS };
