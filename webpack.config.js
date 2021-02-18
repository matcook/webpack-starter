const path = require('path');

module.exports = {
  entry: './app/assets/scripts/main.js',
  output: {
    filename: '[name].bundled.js',
    path: path.resolve(__dirname, 'app'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devtool: 'source-map',
};
