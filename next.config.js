/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com", "picsum.photos", "images.unsplash.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
