var webpackConfig = require('kpc/src/webpack.config');

webpackConfig.entry.all = './vdt/js/app/routes.js';
webpackConfig.disableHardSource = true;
webpackConfig.module.loaders.push({
    test: /\.json$/,
    loader: 'json-loader'
});

module.exports = webpackConfig;
