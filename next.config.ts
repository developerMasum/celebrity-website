// next.config.js or next.config.mjs
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any hostname
      },
    ],
  },
};

export default nextConfig;
