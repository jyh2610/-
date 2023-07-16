/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://jyh2610.github.io/cardgame"
      : "",
  output: "export",
  basePath: "",
};

module.exports = nextConfig;
