const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

let pages = fse
  .readdirSync('./src')
  .filter(function (file) {
    return file.endsWith('.html');
  })
  .map(function (page) {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./src/${page}`,
    });
  });

module.exports = {
  entry: './src/assets/scripts/main.js',
  plugins: pages,
  devtool: 'source-map',
};
