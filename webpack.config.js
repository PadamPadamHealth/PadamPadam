const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: process.env.NODE_ENV,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      }
    ]
  }
}

module.exports = config;