const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: ['file-loader'],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO App',
      template: './src/index.html',
      minify: false,
    }),
    new CleanWebpackPlugin(),
  ],
};
