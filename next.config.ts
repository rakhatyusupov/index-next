import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /*output: "export",
  distDir: "docs",
  basePath: isGithubPages ? "/index-next" : "",
  assetPrefix: isGithubPages ? "/index-next/" : "",*/
};

export default nextConfig;
