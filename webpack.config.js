const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@fixtures': path.resolve(__dirname, 'fixtures/'),
    },
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
