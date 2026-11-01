import type { NextConfig } from "next";

// GitHub Pages serves a project repository under /<repo-name>; the deploy workflow passes that
// prefix in. A <username>.github.io repository or a custom domain leaves it empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages (no Node server there).
  output: "export",
  // Emit folder/index.html files so routes resolve without rewrite rules.
  trailingSlash: true,
  // Pages serves plain files; Next's on-demand image optimizer can't run.
  images: { unoptimized: true },
  basePath,
  // Lets components prefix files from public/ (see lib/links.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
