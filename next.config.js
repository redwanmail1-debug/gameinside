/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'cdn.cloudflare.steamstatic.com' },
      { protocol: 'https', hostname: 'shared.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'assets.nintendo.com' },
      { protocol: 'https', hostname: 'blog.playstation.com' },
      { protocol: 'https', hostname: 'xboxwire.thesourcemediaassets.com' },
      { protocol: 'https', hostname: 'xxboxnews.blob.core.windows.net' },
      // Sanity CDN for article images uploaded via Studio
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

module.exports = nextConfig;
