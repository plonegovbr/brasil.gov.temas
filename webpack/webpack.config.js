const makeConfig = require('sc-recipe-staticresources');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');


let createTheme = (theme) => {
  let publicPath = `++theme++${theme}/`;

  return makeConfig(
    // name
    'brasil.gov.temas',

    //shortName
    'brasilgovtemas',

    //path
    `${__dirname}/../src/brasil/gov/temas/themes/${theme}`,

    //publicPath
    publicPath,

    // callback
    function(config, options) {
      config.entry.unshift(
        `./app/${theme}/preview.png`,
        `./app/${theme}/brasilgovtemas.scss`,
      );
      // Change image handler context
      config.module.rules[2].use[0].options.context = `app/${theme}/`;
      config.plugins.push(
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
        new HtmlWebpackPlugin({
          filename: 'index-minimalista.html',
          template: 'app/index-minimalista.html',
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
        }),
      );
    },
  );
};


module.exports = [
  createTheme('padrao'),
  createTheme('branco'),
];
