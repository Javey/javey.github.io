import App from 'kpc/src/components/app';

var VdtApp = App.extend({
    _init() {
        this.locals = {};
    }
});

export default Intact.mount(VdtApp, document.getElementById('page'));
