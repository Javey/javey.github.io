var Advanced = require('advanced'),
    Utils = Advanced.Utils,
    Vdt = require('vdt');

var app = Advanced((app) => {
    Vdt.setDefaults('delimiters', ['{{', '}}']);
    app.use(require('kpc/src/lib/stylus')({
        src: __dirname,
        dest: __dirname + '/.cache'
    }));
    var webpackDev = require('kpc/src/lib/webpackDev'),
        webpackConfig = require('./webpack.config');
    app.use(webpackDev(webpackConfig, app));
    app.use(Advanced.Express.static(__dirname));
    app.get('/test', function(req, res, next) {
        // Vdt.setDefaults({views: 'vdt/test'});
        // res.end(Vdt.renderFile('index', {title: 'Vdt'}));
        var a = '<div>{{title}}</div>',
            vdt = Vdt(a);
        res.end(vdt.renderString({title: 'Vdt'}));
    });
});

app.listen(Utils.c('port'), () => {
    Advanced.Logger.log(`App is listening on port ${Utils.c('port')}`);
});
