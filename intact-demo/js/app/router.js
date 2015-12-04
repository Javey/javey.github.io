define(['director', 'js/app/app'], function(Router, App) {
    return Router({
        '/': function() {
            App.load('dash');
        },
        '/dash': function() {
            App.load('dash');
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
});