const path = require('path');

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devtool: 'source-map',
};
