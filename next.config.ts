/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "sklep099968.shoparena.pl" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    qualities: [25, 50, 75, 100],
  },
};

module.exports = nextConfig;