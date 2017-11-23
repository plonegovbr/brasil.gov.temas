var CopyWebpackPlugin = require('copy-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
  entry: [
    './app/padrao/brasilgovtemas.scss',
    './app/padrao/preview.png',
  ],
  output: {
    filename: 'brasilgovtemas.js',
    path: __dirname + '/../src/brasil/gov/temas/themes'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app/index.html', to: 'padrao/index.html' },
      { from: 'app/rules.xml', to: 'padrao/rules.xml' },
      { from: 'app/padrao/manifest.cfg', to: 'padrao/manifest.cfg' },
    ], {
    }),
    new SpritesmithPlugin({
      src: {
        cwd: 'app/padrao/sprite',
        glob: '*.png'
      },
      target: {
        image: 'app/padrao/img/sprite.png',
        css: 'app/padrao/_sprite.scss'
      },
      apiOptions: {
        cssImageRef: './img/sprite.png'
      }
    })
  ],
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
            publicPath: '../'
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
}
