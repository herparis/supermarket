var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  mode: 'development',
  plugins: [
    new htmlWebpackPlugin({
      template: 'app/index.html',
    })
  ]
}