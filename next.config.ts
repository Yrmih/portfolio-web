import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "cdn.brandfetch.io",
      "cdn-icons-png.flaticon.com",
      "sentry-brand.storage.googleapis.com",
      "raw.githubusercontent.com",
      "img.icons8.com",
    ],
  },
};

export default nextConfig;
