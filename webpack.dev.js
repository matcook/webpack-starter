'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src'),
  },
  devServer: {
    before: function (app, server) {
      server._watch('./src/**/*.html');
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  },
  target: 'web',
});
