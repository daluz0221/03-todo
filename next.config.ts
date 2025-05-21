import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io'
      },
      {
        protocol: 'https',
        hostname: 'static1.cbrimages.com'
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com'
      },
    ]
  }
};

export default nextConfig;
