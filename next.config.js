/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = {
  ...withNextIntl(nextConfig),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maoiproject.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
