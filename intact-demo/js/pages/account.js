define(['intact', 'rvdt!tpl/account.vdt'], function(Intact, template) {
    return Intact.extend({
        defaults: {
            settings: true
        },

        displayName: 'Account',

        template: template,

        _change: function(e) {
            this.set('settings', e.target.checked, {silent: true});
        }
    });
});
