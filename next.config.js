/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "help.twitter.com",
      "picsum.photos",
      "images.unsplash.com",
      "cdn.cnn.com",
      "media.cnn.com",
      "randomuser.me",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
