const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        asyncChunks: true,

      },
    entry: path.join(__dirname, "src", "index.jsx"),
   
    module: {
        rules: [
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                  }
                ]
              },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
              },
              {
                test: /\.html$/,
                use: [{ loader: "html-loader" }]
              },
              {
                test: /\.css$/, 
                use: [ "style-loader", "css-loader" ]
              },
              {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [ 'file-loader' ]
              }
          ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",

        })],
    devServer: {
        static: { 
            directory: path.resolve(__dirname, './public'), 
            publicPath: '/public'
          },
                  historyApiFallback: true,
        compress: true,
        port: 8081,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://localhost:5001'
        })
    }
}