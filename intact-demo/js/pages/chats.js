define(['intact', 'rvdt!tpl/chats.vdt', 'js/lib/utils', 'js/app/app'], function(Intact, template, utils, App) {
    return Intact.extend({
        displayName: 'Chats',
        defaults: {
            chats: []
        },

        template: template,

        initialize: function() {
            App.get('data').chatUrl = '#/chats';
        },

        _init: function() {
            this.initialize();
            this.loaded = false;
            return this.fetch();
        },

        _beforeUpdate: function() {
            this.initialize();
        },

        fetch: function() {
            return utils.api().then(function(data) {
                if (App.get('view') !== this) return; // if page has changed, then do nothing
                this.loaded = true;
                this.set('chats', data);
            }.bind(this));
        }
    });
});
