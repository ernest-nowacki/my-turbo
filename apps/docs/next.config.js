/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@repo/ui"],
    turbo: {
      treeShaking: true,
      moduleIdStrategy: "deterministic",
    },
  },
};

export default nextConfig;
