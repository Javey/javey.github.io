import template from './index.vdt';
import css from './index.styl';
import {highlight, marked} from '../../lib/utils';

export default class extends Intact {
    get template() { return template; }

    _create() {

    }
}
