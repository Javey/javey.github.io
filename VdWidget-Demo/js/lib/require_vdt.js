define(function(require, exports) {
    var Vdt = require('vdt');

    exports.load = function(name, req, load, config) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                load.fromText(strDefine(Vdt.compile(xhr.responseText).source));
            }
        };

        xhr.open('GET', config.baseUrl + name, true);
        xhr.send(null);
    };

    function strDefine(template) {
        return [
            "define(function(require) {",
                "return ", template,
            "});"
        ].join('');
    }
});