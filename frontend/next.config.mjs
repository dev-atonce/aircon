/** @type {import('next').NextConfig} */
const nextConfig = {
  // skipTrailingSlashRedirect: true,
  // i18n: {
  //   locales: ['th', 'en'],
  //   defaultLocale: 'th',
  //   localeDetection: false,
  // },
  //  serializeConfig: false,
  // trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "at-once.info",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api-aircon.at-once.info",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.aircon-parts.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
