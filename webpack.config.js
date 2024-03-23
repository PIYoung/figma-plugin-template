/* eslint-disable @typescript-eslint/no-var-requires */
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",
  devtool: argv.mode === "production" ? false : "inline-source-map",
  entry: {
    ui: "./src/app/index.tsx",
    code: "./src/plugin/code.ts",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.svg$/i, use: ["@svgr/webpack"] },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "assets/images/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // Compile into a folder called "dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/index.html",
      filename: "ui.html",
      chunks: ["ui"],
      inlineSource: ".(js)$",
      cache: false,
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
  ],
});
