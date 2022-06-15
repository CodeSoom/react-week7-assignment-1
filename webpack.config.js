const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== 'development';
  if (!isDevelopment) {
    dotenv.config();
  }
  if (isDevelopment) {
    dotenv.config({ path: path.join(__dirname, './.env.local') });
  }
  return {
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
    plugins: [
      new webpack.DefinePlugin({
        'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: {
        index: 'index.html',
      },
    },
  };
};
