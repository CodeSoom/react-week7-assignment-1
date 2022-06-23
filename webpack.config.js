const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';

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
      new Dotenv({
        path: `./.env.${isDevelopment ? 'development' : 'production'}`,
        systemvars: true,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
