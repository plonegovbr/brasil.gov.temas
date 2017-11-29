var CopyWebpackPlugin = require('copy-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');


var createTheme = function(color) {
  return {
    entry: [
      './app/brasilgovtemas.js',
      './app/' + color + '/brasilgovtemas.scss',
      './app/' + color + '/preview.png',
    ],
    output: {
      filename: color + '/brasilgovtemas.js',
      library: 'leitrabalhista',
      libraryTarget: 'umd',
      path: __dirname + '/../src/brasil/gov/temas/themes',
      publicPath: '/++theme++' + color + '/'
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'app/index.html', to: color + '/index.html' },
        { from: 'app/rules.xml', to: color + '/rules.xml' },
        { from: 'app/' + color + '/manifest.cfg', to: color + '/manifest.cfg' },
      ], {
      }),
      new SpritesmithPlugin({
        src: {
          cwd: 'app/' + color + '/sprite',
          glob: '*.png'
        },
        target: {
          image: 'app/' + color + '/img/sprite.png',
          css: 'app/' + color + '/_sprite.scss'
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].css',
              context: 'app/'
            }
          },
          'extract-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'app/',
              publicPath: function(url) {
                return '/++theme++' + url;
              }
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
  createTheme('azul'),
  createTheme('verde'),
];
