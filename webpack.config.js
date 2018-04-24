const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// Build directory is where the bundle file will be placed
const BUILD_DIR = path.resolve(__dirname, 'public/dist');
// App directory is where raw JSX files will be placed
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  context: APP_DIR,
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: BUILD_DIR,
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css' }),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

module.exports = config;
