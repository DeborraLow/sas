const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
  // , disable: process.env.NODE_ENV === "development"
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    contentBase: './public'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }, {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './public/favicon.ico',
      minify: {
        removeComments: true
      },
      template: 'src/index.pug'
    }),
    new CleanWebpackPlugin(['public'], {
      root: '/Users/maratagliulin/dev/lectures',
      verbose: true,
      dry: false,
      exclude: ['favicon.ico', 'assets']
    }),
    //     new JavaScriptObfuscator ({
    // 	compact: true,
    // 	controlFlowFlattening: false,
    // 	deadCodeInjection: false,
    // 	debugProtection: false,
    // 	debugProtectionInterval: false,
    // 	disableConsoleOutput: true,
    //     	log: false,
    // 	mangle: true,
    // 	renameGlobals: false,
    // 	rotateStringArray: true,
    // 	selfDefending: true,
    // 	stringArray: true,
    // 	stringArrayEncoding: false,
    // 	stringArrayThreshold: 0.75,
    // 	unicodeEscapeSequence: false
    // })
  ],
  //watch: true
};
