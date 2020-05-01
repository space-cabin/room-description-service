const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : './client',
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};