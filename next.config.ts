import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PORTFOLIO',
  assetPrefix: '/PORTFOLIO',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
