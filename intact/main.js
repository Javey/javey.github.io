import App from './components/app';
import {Router} from 'director';
import css from './css/layout.styl';

const app = Intact.mount(App, document.getElementById('page'));

const router = Router({
    '/': function() {
        require(['./pages/index'], app.run());
    }
}).configure({
    notfound: function() {
        router.setRoute('/');
    }
});

router.init('/');
