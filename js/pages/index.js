define([
    'intact', 
    'rvdt!tpl/pages/index.vdt', 
    'underscore', 
    'vdt',
    'hljs'
], function(Intact, template, _, Vdt, hljs) {
    return Intact.extend({
        template: template,

        _create: function() {
            _.each(this.element.querySelectorAll('.hljs'), function(item) {
                hljs.highlightBlock(item);
            });

            var template = this.element.querySelector('#example_template').innerHTML,
                vdt = Vdt(template),
                dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});

            this.element.querySelector('#example').appendChild(dom);

            this.timer = setInterval(function() {
                vdt.data.time = new Date().toLocaleTimeString();
                vdt.update();
            }, 1000);
        },

        _update: function() {
            this._create();
        },

        _destroy: function() {
            clearInterval(this.timer);
        }
    });
});
