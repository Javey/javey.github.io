define(['director', 'js/app/app'], function(Router, App) {
    var router = Router({
        '/': function() {
            App.load('index');
        },
        '/documents': {
            '/:title': {
                on: function(title) {
                    App.load('documents', {index: title});
                }
            },
            on: function() {
                router.setRoute('/documents/getting-started');
            }
        },
        '/chats': function() {
            App.load('chats');
        },
        '/chats/:id': function(id) {
            App.load('chatDetail', {id: id});
        },
        '/account': function() {
            App.load('account');
        },
        '/sector': function() {
            App.load('sector');
        }
    });

    return router;
});
