const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
  module: {
      loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      },
      {
          test: /\.(png|eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
          loader: 'url'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
          test: /\.html$/,
          loader:'html-loader'
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({    // <added>
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery',
          toastr: 'toastr',
          moment: 'moment'
      }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    //new HtmlWebpackPlugin({
    //  template: conf.path.src('index.html'),
    //  inject: true
    //}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
    })
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: 'index.js'
  },
  entry: [
    `./${conf.path.src('index')}`,
    `./${conf.path.tmp('templateCacheHtml.js')}`
  ]
};
