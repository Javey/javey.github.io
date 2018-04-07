var webpackConfig = require('kpc/src/webpack.config');

webpackConfig.entry.all = './vdt/js/app/routes.js';
process.disableHardSource = true;
process.disableHMR = true;
webpackConfig.module.rules.push({
    test: /\.json$/,
    loader: 'json-loader'
});
webpackConfig.module.noParse = [
    /node_modules\/benchmark/
];

module.exports = webpackConfig;
