var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dev'),
      filename: 'index_bundle.js',
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
   watch: true,
   devtool: 'source-map',
   devServer: {
      contentBase: path.join(__dirname, 'dev'),
      compress: true,
      port: 3000,
      open: true
   },
   plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
   ]
};