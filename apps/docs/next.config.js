/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ["@repo/ui"],
    turbo: {
      treeShaking: true,
      moduleIdStrategy: "deterministic",
    },
  },
  compiler: {
    removeConsole: true,
    reactRemoveProperties: true,
  },
};

export default nextConfig;
