const debug = process.env.NODE_ENV !== "production";
const name = "cardgame";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};

// .babelrc.js
const env = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
};
