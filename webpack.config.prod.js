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
        },
        {
         test: /\.css$/,
         use: [
            "style-loader",
            {
               loader: "css-loader",
               options: {
                  importLoaders: 1,
                  modules: true,
               },
            },
            ],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
               },
            ],
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
   ]
};