var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.resolve(__dirname, 'prod'),
      filename: 'index_bundle.js'
   },
   mode:'production',
   module: {
      rules: [
         {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
         test: /\.css$/,
         exclude: /\.module\.css$/,
         use: [
         {
            loader: 'style-loader',
         },
         {
            loader: 'css-loader',
         },
         ],
      },
      {
         test: /\.module\.css$/,
         use: [
         {
            loader: 'style-loader',
         },
         {
            loader: 'css-loader',
            options: {
               modules: true,
            }
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