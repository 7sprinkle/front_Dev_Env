let path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/assets/", // livereloadに必要、bundleしたファイルの置き場を指定
    watchContentBase: true, // livereloadに必要、contentBaseにあるファイルの変更を検出するための設定
    open: true, // 起動時にブラウザを自動で開く
  },
};