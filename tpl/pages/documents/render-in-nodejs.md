If you want to render vdt template in nodejs, there are three ways to do this.

#### Render template string to html string

`vdt.renderString([data])` can render a template string to a html string. For example

```js
var Vdt = require('vdt');

var vdt = Vdt('<div>{test}</div>');
vdt.renderString({test: 1}); // '<div>1</div>'
```

#### Render template file to html string

`Vdt.renderFile(file, [options])` can render a template file to a html string. For example

vdt file `test.vdt`

```html
<div>{test}</div>
```

js file   

```js
var Vdt = require('vdt');

Vdt.renderFile('./test.vdt', {test: 1}); // '<div>1</div>'
```


#### As express's template engine

Make vdt as an template engine of express, like below

```js
var Express = require('express'),
    Vdt = require('vdt');

var app = Express();
app.engine('vdt', Vdt.__express);
app.set('views', './views');
app.set('view engine', 'vdt');
app.set('view cache', true);

// You'd better to change the delimiters, default {}
Vdt.setDefaults('delimiters', ['{{', '}}']);
```

### Require another template file

You can include and/or extend another template file by calling `require(file)` method. For example

file `layout.vdt`
```js
<div>
    <div>name: {name}</div>
    <b:block />
</div>
```

file `index.vdt`, use `arguments` attribute to pass all data to parent template.
```js
var layout = require('layout');

<t:layout arguments>
    <b:block>
        <div>age: {age}</div>
    </b:block>
</t:layout>
```

file `a.js`
```js
var Vdt = require('vdt');

Vdt.renderFile('index', {name: 'Javey', age: 18});
```
