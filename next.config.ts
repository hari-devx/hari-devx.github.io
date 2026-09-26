import type { NextConfig } from "next";

// Static export for GitHub Pages (https://hari-devx.github.io).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
