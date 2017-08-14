import template from './app.vdt';
import css from './loading.css'; 

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            view: undefined,
            loading: false
        };
    }

    run(data) {
        return (Page) => {
            this.set('loading', true);
            const page = new Page(data);
            this.set('view', page);
            if (page.inited) {
                this.set('loading', false);
            } else {
                page.one('$inited', () => {
                    this.set('loading', false);
                });
            }
        };
    }
}
