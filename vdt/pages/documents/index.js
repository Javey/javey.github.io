// import marked from '../../js/lib/marked';
import MarkdownIt from 'markdown-it';
import MarkdownItDecorate from 'markdown-it-decorate';
import hljs from 'imports?exports=>undefined!../../js/lib/highlight.pack';
import template from './documents.vdt';
import css from './documents.styl';

var marked = MarkdownIt({
    html: true
}).use(MarkdownItDecorate);

export default Intact.extend({
    defaults: {
        index: 'getting-started',
        content: ''
    },

    template: template,

    _init: function() {
        var self = this,
            def = $.Deferred();

        // 储存所有的组件，切换文档时，销毁调组件
        this.components = [];

        this.on('changed:content', this._evalScript);

        var matches = location.href.match(/\/(v[\d\.]+x?)/);
        matches && this.set('version', matches[1], {silent: true});

        $.ajax({
            url: 'docs/' + this.get('index') + '.md', 
            dataType: 'text'
        }).then(function(md) {
            self.set('content', marked.render(md));
        }, function() {
            self.set('content', '<p>To be continued...</p>');
        });
    },

    _evalScript: function() {
        var self = this;

        var delimiters = Vdt.getDelimiters();
        Vdt.setDelimiters(['{', '}']);
        eval($(this.element).find('script[type="text/javascript"]').html());
        Vdt.setDelimiters(delimiters);
        // 自动运行示例
        var promises = [];
        $(this.element).find('.example').each(function() {
            var $this = $(this),
                $template = $this.next('pre').find('.lang-jsx');
            if ($template.length) {
                var templateStr = $template.text(),
                    jsStr,
                    // 是否存在js
                    $js = $template.parent().next('pre').find('.lang-js');
                if ($js.length) {
                    jsStr = $js.text();
                }
                promises.push(utils.run(templateStr, this, jsStr, self.components));
            }
        });
        $(this.element).find('.lang-css').each(function() {
            var css = $(this).text();
            $(this).after('<style>' + css + '</style>');
        });
        $(this.element).find('pre code').each(function(index, item) {
            hljs.highlightBlock(item);
        });

        // 如果存在anchor，则跳转到相应的地方
        if (this.get('anchor')) {
            Promise.all(promises).then(function() {
                // 找到所有可能的关键词
                var $keywords = $(this.element).find('p > code, h3 > code');
                _.find($keywords, function(item) {
                    var text = $(item).text().replace(/\(.*?\)/g, '');
                    if (text === self.get('anchor')) {
                        $('body').animate({scrollTop: $(item).offset().top});
                        return true;
                    }
                });
            }.bind(this));
        }
    },

    _destroy: function() {
        _.each(this.components, function(component) {
            component.destroy();
        });
    }
});
