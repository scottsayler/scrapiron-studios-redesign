import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "custom-images.strikinglycdn.com",
      },
      {
        protocol: "https",
        hostname: "user-images.strikinglycdn.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/organizations",
        statusCode: 301,
      },
      {
        source: "/highlights",
        destination: "/sports-highlights",
        statusCode: 301,
      },
      {
        source: "/recruiting",
        destination: "/athletes",
        statusCode: 301,
      },
      {
        source: "/portfolio",
        destination: "/work",
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/home",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
