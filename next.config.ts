import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? "/PozivnicaDemo" : "",
  assetPrefix: isGitHubPages ? "/PozivnicaDemo/" : undefined
};

export default nextConfig;
