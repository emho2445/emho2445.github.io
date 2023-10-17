const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './script1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: './index.html'
    })
  ]
};