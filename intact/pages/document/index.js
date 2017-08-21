import template from './document.vdt';
import css from './document.styl';
import MarkdownIt from 'markdown-it';
import MarkdownItDecorate from 'markdown-it-decorate';
import highlight from 'highlight.js/lib/highlight';
import lJavascript from 'highlight.js/lib/languages/javascript';
import lCss from 'highlight.js/lib/languages/css';
import lXml from 'highlight.js/lib/languages/xml';
import lBash from 'highlight.js/lib/languages/bash';
import throttle from 'lodash/throttle';
import shuffle from 'lodash/shuffle';


highlight.registerLanguage('bash', lBash);
highlight.registerLanguage('css', lCss);
highlight.registerLanguage('javascript', lJavascript);
highlight.registerLanguage('xml', lXml);

// for debug
window.Intact = Intact;
window.highlight = highlight;
window._ = {throttle, shuffle};

const marked = MarkdownIt({
    html: true,
    breaks: false 
}).use(MarkdownItDecorate);
// 去掉段落softbreak
marked.renderer.rules.softbreak = () => '';

export default class extends Intact {
    get template() { return template; }

    _init() {
        return fetch(`./docs/${this.get('title')}.md`).then(response => {
            return response.text();
        }).then(md => {
            this.set('content', marked.render(md));
        });
    }

    _mount() {
        $(window).scrollTop(0);
        const codes = this.element.querySelectorAll('pre code');
        codes.forEach(item => {
            highlight.highlightBlock(item);
        });
        const catalogs = [];
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
        let template;
        for (let i = 0; i < $examples.length; i++) {
            let $example = $examples.eq(i);
            let code = $example.text();
            if ($example.hasClass('auto')) {
                let _C;
                if ($example.hasClass('language-html')) {
                    template = Intact.Vdt.compile(code);
                    _C = Intact.extend({
                        template: template
                    });
                } else if ($example.hasClass('javascript')) {
                    _C = eval(code);
                }
                let $container = $('<div class="output"></div>');
                $example.parent().after($container);
                Intact.mount(_C, $container[0]);
            } else if ($example.hasClass('manual')) {
                let $button = $('<button>点击运行</button>');
                let $p = $('<p></p>').append($button);
                $example.parent().after($p);
                $button.on('click', ((code) => {
                    return () => {
                        eval(code);
                    };
                })(code));
            } else if ($example.hasClass('language-html')) {
                template = Intact.Vdt.compile(code);
            } else if ($example.hasClass('javascript')) {
                eval(code);
            } else if ($example.hasClass('language-css')) {
                $example.parent().after(`<style>${code}</style>`);
            }
        }

        // 执行script标签
        const $scripts = $(this.element).find('script');
        for (let i = 0; i < $scripts.length; i++) {
            let $script = $scripts.eq(i);
            let code = $script.text();
            eval(code);
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
        $(window).on('scroll.fix', _.throttle(() => {
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
        }, 200));
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
        $(window).off('scroll.fix');
    }
}
