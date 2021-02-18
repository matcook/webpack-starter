const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/assets/scripts/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  devtool: 'source-map',
};
