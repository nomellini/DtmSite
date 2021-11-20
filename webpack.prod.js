const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const TerserPlugin = require('terser-webpack-plugin');
const RemoveConsolePlugin = require('remove-console-webpack-plugin')


module.exports = {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin( {
        extractComments: false,

        terserOptions: {
          format: {
            comments: false,
          },
        ecma: undefined,
        parse: {},
        compress: {drop_console: true},
        mangle: true, // Note `mangle.properties` is `false` by default.
        module: false,
        // Deprecated
        output: null,
        format: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,

      }
    }
      )],
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
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
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: 'Production',


        })],
    devServer: {
        allowedHosts: 'all',

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
            apiUrl: 'https://api.datamace.com.br'
        })
    }
}