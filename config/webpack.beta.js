const merge = require('webpack-merge');
const prod = require('./webpack.prod');
const webpack = require('webpack');
const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = merge(prod, {
  mode: 'production',
  output: {
    path: path.resolve('dist-Beta')
  },
  plugins: [
    new CleanWebPackPlugin(['dist-Beta'], { root: path.resolve(__dirname, '..') }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
});
