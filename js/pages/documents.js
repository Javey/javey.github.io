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

            this._updateGettingStarted();
            this._updateTutorial();
            this._updateKey();
        },

        _updateGettingStarted: function() {
            var example = this.element.querySelector('#example_template');
            if (example) {
                var template = example.innerHTML,
                    vdt = Vdt(template),
                    dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});

                this.element.querySelector('#example').appendChild(dom);

                this.timer = setInterval(function() {
                    vdt.data.time = new Date().toLocaleTimeString();
                    vdt.update();
                }, 1000);
            }
        },

        _updateTutorial: function() {
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
                var template = search.innerHTML,
                    vdt = Vdt(template),
                    dom = vdt.render(model);

                document.getElementById('todo_demo').appendChild(dom);
            }
        },

        _updateKey: function() {
            var self = this;
            function init(id) {
                var template = self.element.querySelector('#' + id + '_template');
                if (template) {
                    var list = ['book', 'food', 'cook'],
                        vdt = Vdt(template.innerHTML),
                        dom = vdt.render({
                            list: list, 
                            isRemoved: false,
                            remove: function() {
                                list.splice(1, 1);
                                this.isRemoved = true;
                                vdt.update();
                            },
                            addText: function() {
                                dom.querySelectorAll('li')[1].appendChild(document.createTextNode(" text"));
                            }
                        });
                    self.element.querySelector('#' + id).appendChild(dom);
                }

            }

            init('with_key');
            init('without_key');
        },

        _destroy: function() {
            clearInterval(this.timer);
        }
    });
});
