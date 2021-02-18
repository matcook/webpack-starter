const path = require('path');

module.exports = {
  entry: './app/assets/scripts/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
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
  target: 'web',
  mode: 'development',
};
