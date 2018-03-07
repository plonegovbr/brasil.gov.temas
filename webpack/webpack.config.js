const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');


let createTheme = (theme) => {
  let publicPath = `++theme++${theme}/`;
  return {
    entry: [
      './app/brasilgovtemas.js',
      `./app/${theme}/brasilgovtemas.scss`,
      `./app/${theme}/preview.png`
    ],
    output: {
      filename: `brasilgovtemas-[hash].js`,
      library: 'leitrabalhista',
      libraryTarget: 'umd',
      path: `${__dirname}/../src/brasil/gov/temas/themes/${theme}`,
      publicPath: publicPath,
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new CleanObsoleteChunks({
        verbose: true,
        deep: true,
      }),
      new CopyWebpackPlugin([
        { from: 'app/rules.xml', to: 'rules.xml' },
        { from: 'app/favicons/android-chrome-192x192.png', to: 'favicons/android-chrome-192x192.png' },
        { from: 'app/favicons/android-chrome-512x512.png', to: 'favicons/android-chrome-512x512.png' },
        { from: 'app/favicons/apple-touch-icon.png', to: 'favicons/apple-touch-icon.png' },
        { from: 'app/favicons/favicon-16x16.png', to: 'favicons/favicon-16x16.png' },
        { from: 'app/favicons/favicon-32x32.png', to: 'favicons/favicon-32x32.png' },
        { from: 'app/favicons/mstile-150x150.png', to: 'favicons/mstile-150x150.png' },
        { from: 'app/favicons/safari-pinned-tab.svg', to: 'favicons/safari-pinned-tab.svg' },
        { from: `app/${theme}/favicons/browserconfig.xml`, to: 'favicons/browserconfig.xml' },
        { from: `app/${theme}/favicons/manifest.json`, to: 'favicons/manifest.json' },
        { from: `app/${theme}/manifest.cfg`, to: 'manifest.cfg' },
      ], {
      }),
      new ExtractTextPlugin({
        filename: 'brasilgovtemas-[hash].css',
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'app/index.html',
        publicPath: publicPath,
      }),
      new SpritesmithPlugin({
        src: {
          cwd: `app/${theme}/sprite`,
          glob: '*.png'
        },
        target: {
          image: `app/${theme}/img/sprite.png`,
          css: `app/${theme}/_sprite.scss`
        },
        apiOptions: {
          cssImageRef: './img/sprite.png'
        }
      })
    ],
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(\/node_modules\/|test\.js$|\.spec\.js$)/,
        use: 'babel-loader',
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'app/'
          }
        }
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: `app/${theme}/`
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              }
            }
          }
        ]
      }, {
        test: /\.svg/,
        exclude: /node_modules/,
        use: 'svg-url-loader'
      }]
    }
  };
};

module.exports = [
  createTheme('padrao'),
  // createTheme('azul'),
  // createTheme('verde'),
];
