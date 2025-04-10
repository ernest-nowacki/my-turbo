/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ["@repo/ui"],
  },
  turbopack: {
    treeShaking: true,
    moduleIds: "deterministic",
  },
  compiler: {
    removeConsole: true,
    reactRemoveProperties: true,
  },
};

export default nextConfig;
