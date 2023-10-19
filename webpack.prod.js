const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // Import TerserPlugin

process.env["NODE_ENV"] = "production";

module.exports = merge([
  common,
  {
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [
        // Use the `TerserPlugin` for JavaScript minification
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
  },
]);
