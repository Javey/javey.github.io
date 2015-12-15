var Express = require('express'),
    Vdt = require('vdt');

var app = Express();

app.use(Express.static(__dirname));

app.listen(64739);
console.log('App is listening on port 64739');
