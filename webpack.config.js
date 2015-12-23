var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'app.js'
  },
  resolve: {
    extensions:['', '.js', '.json', '.jsx', '.css'],
    modulesDirectories: ['bower_components', 'node_modules', './src']
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/assets/index.html'
    }),
    new ExtractTextPlugin("css/app.css", { allChunks: true }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ],
  progress: true
};