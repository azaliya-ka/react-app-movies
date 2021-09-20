var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dev'),
      filename: 'index_bundle.js'
   },
   mode:'development',
   module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
      ]
   },
   devtool: 'source-map',
   plugins: [new HtmlWebpackPlugin()],
};