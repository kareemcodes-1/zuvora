

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // WARNING: disables build-time type checking — use at your own risk
    ignoreBuildErrors: true,
  },
   images: {
    domains: ['framerusercontent.com', 'cdn.shopify.com', 'localhost', 'sklep099968.shoparena.pl', 'i.pinimg.com']
  },
  eslint: {
    // also ignores lint errors during build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

