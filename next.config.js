/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'shared.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'assets.nintendo.com' },
      { protocol: 'https', hostname: 'blog.playstation.com' },
      { protocol: 'https', hostname: 'xboxwire.thesourcemediaassets.com' },
      { protocol: 'https', hostname: 'xxboxnews.blob.core.windows.net' },
    ],
  },
};

module.exports = nextConfig;
