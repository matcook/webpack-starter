'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    before: function (app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  },
  target: 'web',
});