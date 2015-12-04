define(['intact', 'vdt'], function(Intact, Vdt) {
    var cache = {};
    var Widget = Intact.extend({
        displayName: 'App',
        defaults: {
            view: '',
            data: {
                chatUrl: '#/chats'
            }
        },

        template: Vdt.compile('return this.get("view") || <div class="sk-rotating-plane"></div>', {autoReturn: false}),

        load: function(page, data) {
            var self = this;
            page = 'js/pages/' + page;
            require([page], this._current = function callee(Widget) {
                if (callee !== self._current) return;
                if (!cache[page]) {
                    cache[page] = new Widget(data);
                }
                // if the data has changed, then re-fetch data
                cache[page].set(data, {
                    silent: true, // we must set silent to prevent the widget from triggering a change event
                    change: function() {
                        this._init();
                    }
                });
                self.set('view', cache[page]);
            });
            return this;
        }
    });

    return Intact.mount(Widget, document.getElementById('page'));
});
