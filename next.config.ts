import type { NextConfig } from "next";

// Static export: Amplify Hosting serves the generated `out/` folder.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
