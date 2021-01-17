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
    alias: {
      container: path.resolve(__dirname, 'src/container/'),
      presentational: path.resolve(__dirname, 'src/presentational/'),
      _redux: path.resolve(__dirname, 'src/redux/'),
      services: path.resolve(__dirname, 'src/services/'),
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
