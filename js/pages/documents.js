define([
    'intact', 
    'rvdt!tpl/pages/documents/index.vdt',
    'vdt',
    'bower_components/marked/lib/marked',
    'js/lib/utils',
    'hljs'
], function(Intact, template, Vdt, marked, Utils, hljs) {
    return Intact.extend({
        defaults: {
            index: '',
            article: _.noop,
            content: ''
        },

        template: template,

        _init: function() {
            var self = this;
            return Utils.ajax('/tpl/pages/documents/' + self.get('index') + '.md').done(function(md) {
                self.set('content', marked(md) || 'To be continued...');
            });
        },

        _update: function() {
            _.each(this.element.querySelectorAll('pre code'), function(item) {
                hljs.highlightBlock(item);
            });

            var example = this.element.querySelector('#example_template'),
                template,
                vdt,
                dom;
            if (example) {
                template = example.innerHTML;
                vdt = Vdt(template);
                dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});

                this.element.querySelector('#example').appendChild(dom);

                this.timer = setInterval(function() {
                    vdt.data.time = new Date().toLocaleTimeString();
                    vdt.update();
                }, 1000);
            }
            var search = this.element.querySelector('#todo_template');
            if (search) {
                var model = {
                    todos: [
                        {name: 'todo'}
                    ],
                    input: '',

                    add: function(e) {
                        model.todos.push({name: e.target.value});
                        model.input = '';
                        vdt.update();
                    },

                    change: function(e) {
                        model.input = e.target.value;
                        vdt.update();
                    },

                    remove: function(index) {
                        model.todos.splice(index, 1);
                        vdt.update();
                    }
                };
                template = search.innerHTML;
                vdt = Vdt(template);
                dom = vdt.render(model);

                document.getElementById('todo_demo').appendChild(dom);
            }
        },

        _destroy: function() {
            clearInterval(this.timer);
        }
    });
});
