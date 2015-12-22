var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  resolve:{
    extensions:['', '.js', '.json', '.jsx'],
    modulesDirectories: ['bower_components', 'node_modules', './src'],
  },
  module: {
    loaders: [{
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
    }]
  }
};