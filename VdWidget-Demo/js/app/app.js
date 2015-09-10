define(['vdwidget', 'vdt'], function(VdWidget, Vdt) {
    var Widget = VdWidget.extend({
        defaults: {
            view: ''
        },

        template: Vdt.compile('return this.get("view") || <div>加载中...</div>', {autoReturn: false}),

        load: function(page, data) {
            var self = this;
            require(['js/pages/' + page], this._current = function callee(Widget) {
                if (callee !== self._current) return;
                var widget = new Widget(data);
                if (widget.rendered) {
                    self.set('view', widget);
                } else {
                    widget.on('rendered', function() {
                        if (callee === self._current) {
                            self.set('view', widget);
                        }
                    });
                }
            });
            return this;
        }
    });

    return VdWidget.mount(Widget, document.getElementById('page'));
});
