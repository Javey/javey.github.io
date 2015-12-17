Vdt template can be extended. It provides two directives to go there, `<t:template>` and `<t:block>`.

* __`<t:template>`__ 

    `template` is a template function that you will extend. Call `vdt.compile()` to create a template function.

* __`<t:block>`__

    `block` is a name of block. It can be filled in sub-template.

```html
<script type="text/vdt" id="layout_template">
    <div>
        <h1>layout</h1>
        <b:body></b:body>
    </div>
</script>

<script type="text/vdt" id="sub_template">
    var source = document.getElementById('layout_template').innerHTML,
        layout = Vdt.compile(source);

    <t:layout>
        <b:body>sub-template</b:body>
    </t:layout>
</script>
```
    
The sub-template will output

```html
<div>
    <h1>layout</h1>
    sub-template
</div>
```

#### Pass template function to sub-template

The preceding demonstration has a side effect. It will compile `layout_template` when you update `sub_template` every time. So we should compile
it outside `sub_template` and pass the template function to `sub_template`.

```html
...

<script type="text/vdt" id="sub_template">
    <t:layout>
        <b:body>sub-template</b:body>
    </t:layout>
</script>

<script type="text/javascript">
    var source = document.getElementById('layout_template').innerHTML,
        layout = Vdt.compile(source);
    
    var subVdt = Vdt(document.getElementById('sub_template').innerHTML);
    
    subVdt.render({layout: layout});
</script>
```

#### Use require of AMD 

`Vdt` doesn't provide `require` method, but we can use `require` by inlucding `require.js` or any other amd library. When we want to extend another vdt file,
it will be useful. But we need compile vdt to javascript in advance. Use [middleware](http://localhost:64739/vdt.html#/documents/middleware) to do real-time compilation 
or [gulp-vdt](https://github.com/Javey/gulp-vdt) to do pre compilation.

Assume that there is a file named `layout.vdt` and the contents is:

```html
<div>
    <h1>layout</h1>
    <b:body></b:body>
</div>
```

Another file extends `layout.vdt`.

```js
var layout = require('layout');

<t:layout>
    <b:body>sub-template</b:body>
</t:layout>
```

#### Refer the content of parent block

Sub-template can refer the content of parent block via `parent()` method. 

For example:

```html
<div>
    <h1>layout</h1>
    <b:body>
        <div>layout body</div>
    </b:body>
</div>
```

Then in sub-template:

```js
var layout = require('layout');

<t:layout>
    <b:body>
        <div>before layout body</div>
        {parent()}
        <div>sub body</div>
    </b:body>
</t:layout>
```

The output of sub-template:

```html
<div>
    <h1>layout</h1>
    <div>before layout body</div>
    <div>layout body</div>
    <div>sub body</div>
</div>
```

#### Include template

Including a template is just like extending a template. With `require` method and `<t:template>` directive, things will be simple.

Assume that we have a file named `header.vdt` like below.

```html
<header>title</header>
```

We include the file in the preceding sub-template like below.

```js
var layout = require('layout'),
    header = require('header');

<t:layout>
    <b:body>
        {/* use <t:template> directive to render it */}
        <t:header />
        <div>before layout body</div>
        {parent()}
        <div>sub body</div>
    </b:body>
</t:layout>
```

The output:

```html
<div>
    <h1>layout</h1>
    <header>title</header>
    <div>before layout body</div>
    <div>layout body</div>
    <div>sub body</div>
</div>
```
