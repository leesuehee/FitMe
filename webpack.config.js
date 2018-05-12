var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve : {
    extensions: ['.js','.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: [
            ["env", {
              "targets": { node: "6" },
            }],
            "stage-0",
            "react"
          ]
          // presets:['react','es2015','babel-preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};