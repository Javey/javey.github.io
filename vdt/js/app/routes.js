import App from './app';
import Vdt from 'vdt';

var router = Router({
    '/': function() {
        // require(['../../pages/index'], App.run());
        router.replaceRoute('/documents');
    },
    '/documents': {
        '/:title': {
            on: function(title) {
                var qs = kpc.utils.unParam(location.hash.split('?')[1]);
                require(['../../pages/documents'], App.run({
                    index: title,
                    anchor: qs.anchor
                }));
            }
        },
        on: function() {
            router.replaceRoute('/documents/getting-started');
        }
    }
}).configure({
    notfound: function() {
        router.replaceRoute('/documents');
    }
});

router.init('/');

window.Vdt = Vdt;
window.App = App;
