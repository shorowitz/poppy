var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
    multiStep: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      "**": "http://localhost:8080"
      // '^/api/*': {
      //   target: 'http://localhost:8080',
      //   secure: false
      // },

    }
}


}
