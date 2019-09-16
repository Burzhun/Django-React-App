const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const pages =
  fs
    .readdirSync(path.resolve(__dirname, '../src/pug/pages'))
    .filter(fileName => fileName.endsWith('.pug'));

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../public'),
  assets: 'assets/'
};

module.exports = {

  externals: {
    paths: PATHS
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: `${PATHS.assets}img/[name].[ext]`
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: `${PATHS.assets}fonts/[name].[ext]`
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': 'src',
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.src}/${PATHS.assets}img`,
      to: `${PATHS.assets}img`
    }, {
      from: `${PATHS.src}/${PATHS.assets}fonts`,
      to: `${PATHS.assets}fonts`
    },
      {
        from: `${PATHS.src}/static`,
        to: ''
      }
    ]),
    ...pages.map(page => new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`
    }))
  ]
};