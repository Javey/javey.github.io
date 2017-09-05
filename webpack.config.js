var webpackConfig = require('kpc/src/webpack.config');

webpackConfig.entry.all = './vdt/js/app/routes.js';
process.disableHardSource = true;
process.disableHMR = true;
webpackConfig.module.rules.push({
    test: /\.json$/,
    loader: 'json-loader'
});

module.exports = webpackConfig;
