Any ouput will be escaped. We can use `innerHTML` attribute that every element has to prevent it to be escaped.

For example:

```js
var a = '<h1>title</h1>';
<div>{a}</div> // a will be escaped, -> <div>&lt;h1&gt;title&lt;/h1&gt;</div>
```

but

```js
var a = '<h1>title</h1>';
<div innerHTML={a}></div> // a will not be escaped -> <div><h1>title</h1></div> 
```
