/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "at-once.info",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api-speedmove.at-once.info",
        port: "",
      },
    ],
  },
};

export default nextConfig;
