/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  basePath: "/index-next",
  assetPrefix: "/index-next",
};

module.exports = nextConfig;
