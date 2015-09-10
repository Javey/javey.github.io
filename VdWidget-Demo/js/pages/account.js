define(['vdwidget', 'rvdt!tpl/account.vdt'], function(VdWidget, template) {
    return VdWidget.extend({
        defaults: {
            settings: {
                enableFriends: true
            }
        },

        template: template,

        _change: function(e) {
            this.get('settings').enableFriends = e.target.checked;
        }
    });
});