const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ],
}