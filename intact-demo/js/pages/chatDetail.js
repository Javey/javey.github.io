define(['intact', 'rvdt!tpl/chatDetail.vdt', 'underscore', 'js/lib/utils', 'js/app/app'], function(Intact, template, _, utils, App) {
    return Intact.extend({
        displayName: 'ChatDetail',
        defaults: {
            chat: {}
        },

        template: template,

        initialize: function() {
            App.get('data').chatUrl = '#/chats/' + this.get('id');
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
                var chat = _.find(data, function(chat) {
                    return chat.id == this.get('id');
                }, this);

                this.set('chat', chat);
            }.bind(this));
        },

        backCallback: function() {
            location.hash = '#/chats';
        }
    });
});
