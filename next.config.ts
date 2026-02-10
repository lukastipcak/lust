import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lukastipcak/lust',   // DŮLEŽITÉ
  assetPrefix: '/lukastipcak/lust/',
};

export default nextConfig;
