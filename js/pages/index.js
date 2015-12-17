define([
    'intact', 
    'rvdt!tpl/pages/index.vdt', 
    'underscore', 
    'vdt',
    'hljs',
    'bower_components/marked/lib/marked',
    'js/lib/utils'
], function(Intact, template, _, Vdt, hljs, marked, Utils) {
    return Intact.extend({
        defaults: {
            content: ''
        },

        template: template,

        _init: function() {
            var self = this;
            return Utils.ajax('/tpl/pages/documents/home.md').done(function(md) {
                self.set('content', marked(md) || 'To be continued...');
            });
        },

        _update: function() {
            _.each(this.element.querySelectorAll('pre code'), function(item) {
                hljs.highlightBlock(item);
            });

            var template = this.element.querySelector('#example_template');
            if (template) {
                template = template.innerHTML;
                var vdt = Vdt(template),
                    dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});

                this.element.querySelector('#example_container').appendChild(dom);

                this.timer = setInterval(function() {
                    vdt.data.time = new Date().toLocaleTimeString();
                    vdt.update();
                }, 1000);
            }
        },

        _destroy: function() {
            clearInterval(this.timer);
        }
    });
});
