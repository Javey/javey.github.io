import template from './app.vdt';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            view: undefined
        };
    }

    run(data) {
        return (Page) => {
            this.set('view', new Page(data));
        };
    }
}
