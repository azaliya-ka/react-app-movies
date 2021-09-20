var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'prod'),
      filename: 'index_bundle.js'
   },
   mode:'production',
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
   plugins: [new HtmlWebpackPlugin()],
};