'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const fse = require('fs-extra');

class CopyImages {
  apply(compiler) {
    compiler.hooks.done.tap('Copy Images', function () {
      fse.copySync('./src/assets/images', './dist/assets/images');
    });
  }
}

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: { chunks: 'all' },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css' }),
    new CopyImages(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
});
