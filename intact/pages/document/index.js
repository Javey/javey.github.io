import template from './document.vdt';
import css from './document.styl';
import MarkdownIt from 'markdown-it';
import MarkdownItDecorate from 'markdown-it-decorate';
import highlight from 'highlight.js';
import {debounce} from 'lodash';

const marked = MarkdownIt({
    html: true
}).use(MarkdownItDecorate);

export default class extends Intact {
    get template() { return template; }

    _init() {
        return fetch(`/docs/${this.get('title')}.md`).then(response => {
            return response.text();
        }).then(md => {
            this.set('content', marked.render(md));
        });
    }

    _mount() {
        const codes = this.element.querySelectorAll('pre code');
        codes.forEach(item => {
            highlight.highlightBlock(item);
        });
        const catalogs = []
        catalogs.active = 'active1';
        this.element.querySelectorAll('h1').forEach(item => {
            const catalog = {title: item.innerText};
            let nextSibling = item.nextSibling;
            while (nextSibling) {
                const tagName = (nextSibling.tagName || '').toLowerCase();
                if (tagName === 'h1') break;
                if (tagName === 'h2') {
                    if (!catalog.subs) {
                        catalog.subs = [];
                        catalog.subs.active = 'active2';
                    }
                    catalog.subs.push({
                        title: nextSibling.innerText
                    });
                }
                nextSibling = nextSibling.nextSibling;
            }
            catalogs.push(catalog);
        });
        this.set('subCatalogs', catalogs);

        this.evalScript();
        this.onScroll();
    }

    evalScript() {
        const $examples = $(this.element).find('.example');
        for (let i = 0; i < $examples.length; i++) {
            eval($examples.eq(i).text());
        }
    }

    onScroll() {
        const $wrapper = $(this.element).find('.content-wrapper');
        const $article = $(this.element).find('article');
        const $h1s = $article.find('h1');
        const $h2s = $article.find('h2');
        $(window).on('scroll.fix', () => {
            const scrollTop = $(window).scrollTop();
            $wrapper[scrollTop >= 15 ? 'addClass' : 'removeClass']('fixed');
        });
        $(window).on('scroll.fix', debounce(() => {
            const scrollTop = $(window).scrollTop();
            
            function findActive($hs) {
                for (let i = $hs.length - 1; i >= 0; i--) {
                    let $h = $hs.eq(i);
                    let top = $h.position().top;
                    if (scrollTop >= top - 60) {
                        return $h.text();
                    }
                }
            }

            this.set({
                active2: findActive($h2s),
                active1: findActive($h1s)
            });
        }, 100));
    }

    scrollTo(text, type) {
        const $article = $(this.element).find('article');
        const $hs = $article.find(type === 'active1' ? 'h1' : 'h2');
       
        for (let i = 0; i < $hs.length; i++) {
            let $h = $hs.eq(i);
            if ($h.text() === text) {
                let top = $h.position().top;
                $('body').animate({
                    scrollTop: top - 60
                });
                break;
            }
        }
    }

    _destroy() {
        $(window).off('scroll.fix')
    }
}
