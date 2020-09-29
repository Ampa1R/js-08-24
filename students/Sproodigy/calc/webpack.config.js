const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  // watch: true,
  entry: './public/js/index.js',
  devServer: {
    contentBase: './public/dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('bundle.css')
  ],
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  }
};
