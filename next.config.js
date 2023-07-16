/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const name = "cardgame";
const nextConfig = {
  assetPrefix: !debug ? `/${name}/` : "",
  output: "export",
  basePath: "/docs",
};

module.exports = nextConfig;
