const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');


let createTheme = (theme) => {
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
      publicPath: `/++theme++${theme}/`
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'app/rules.xml', to: 'rules.xml' },
        { from: `app/${theme}/manifest.cfg`, to: 'manifest.cfg' },
      ], {
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'app/index.html'
      }),
      new ExtractTextPlugin({
        filename: 'brasilgovtemas-[hash].css',
        allChunks: true
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
