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
        permanent: true,
      },
      {
        source: "/highlights",
        destination: "/sports-highlights",
        permanent: true,
      },
      {
        source: "/recruiting",
        destination: "/athletes",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
