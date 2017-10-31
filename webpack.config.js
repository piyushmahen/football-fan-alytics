/* eslint no-console: 0 */

process.noDeprecation = true;

const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'static/js/react/dist/');

const publicPath = '/js/react/dist/';

const plugins = [
  new CleanWebpackPlugin([BUILD_DIR], {
    verbose: true,
    exclude: ['json'],
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor', 'r'],
    filename: '[name]-[chunkhash].bundle.js',
  }),
  new ExtractTextPlugin({
    filename: '/football-[contenthash].min.css',
    allChunks: true,
  }),
  new HTMLPlugin({
    title: 'Dashboard',
    filename: '../../../index.html',
    inject: true,
    hash: true,
    xhtml: true,
    template: 'index.ejs',
    chunks: ['r', 'vendor', 'football'],
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
];

const config = {
  watchOptions: {
    poll: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    football: './frontend-v2/src/App.jsx',
    r: [
      'react',
      'react-dom',
      'react-router',
    ],
    vendor: [
      'babel-polyfill',
      'classnames',
      'promise-polyfill',
      'semantic-ui-react',
      'react-loadable',
      'validator',
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[chunkhash].min.js',
    publicPath,
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        options: {
          plugins: ['transform-decorators-legacy', 'transform-class-properties'],
        },
      },
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        options: {
          emitWarning: true,
        },
      },
      {
        loaders: ExtractTextPlugin.extract('css-loader!sass-loader?outputStyle=compressed'),
        test: /\.(scss|css)$/,
      },
    ],
  },
};

module.exports = (env) => {
  if (env && env.upload) {
    plugins.push(new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)());

    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APPLICATION_ENV: JSON.stringify(env.distPath),
      },
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
      output: {
        comments: false,
      },
    }));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  } else if (env && env.perf) {
    plugins.push(new (webpack.optimize.OccurenceOrderPlugin || webpack.optimize.OccurrenceOrderPlugin)());

    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
      output: {
        comments: false,
      },
    }));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
    plugins.push(new BundleAnalyzerPlugin());
  } else {
    plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:8080/dashboard' }));
  }

  config.plugins = plugins;
  config.output.publicPath = publicPath;
  return config;
};
