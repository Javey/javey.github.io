require.config({
    baseUrl: '../',

    paths: {
        vdt: 'bower_components/vdt/dist/vdt',
        vdwidget: 'bower_components/vdwidget/src/vdWidget',
        underscore: 'bower_components/underscore/underscore',
        director: 'bower_components/director/build/director',
        text: 'bower_components/text/text',
        rvdt: 'js/lib/require_vdt'
    },

    shim: {
        director: {
            exports: 'Router'
        }
    }
});

require(['js/app/router'], function(router) {
    router.init('/');
});