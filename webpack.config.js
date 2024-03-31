const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 9000,
  },
  mode: "development",
};
