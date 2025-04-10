import type { NextConfig } from "next";

import { Rewrite } from "next/dist/lib/load-custom-routes";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  rewrites: async (): Promise<Rewrite[]> => {
    return [
      { source: "/api/:path*", destination: "http://localhost:5000/:path*" },
    ];
  },
};

module.exports = nextConfig;
