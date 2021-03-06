const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 3000
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, 'app/main.jsx'),
    path.resolve(__dirname, 'app/main.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        // Post-css loader and its plugins.
        test: /\.scss$/,
        include: path.resolve(__dirname, 'app'),
        loaders: [
          'style', // inserts raw css into styles elements.
          'css', // css-loader parses css files resolves url() expressions.
          'sass'
        ]
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.dae$/,
        include: path.resolve(__dirname, 'app/assets'),
        exclude: /node_modules/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
};
