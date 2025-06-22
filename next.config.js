/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  basePath: ".",
  assetPrefix: ".",
};

module.exports = nextConfig;
