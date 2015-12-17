Take `vdt` as an express middleware. The middleware is used to compile vdt to javascript, rather than used as template engine in node.

```js
app.use(require('vdt').middleware({
    src: 'vdt/src/path',
    amd: true, // add amd wrapper
    force: false, // force compile
    autoReturn: true // see api of `Vdt`
}));
```

#### options.src = process.cwd()

Specify the path of vdt file

#### options.amd = true

If add amd wrapper or not. If true, the output will be wrapped like below.

```js
define(function(require) {
    ...
})
```

#### options.force = false

If true, vdt will force compile vdt file whether the file has been modified or not.

#### options.autoReturn = true

In `vdt`, the last element will be returned by add `return` keyword before it automatically. If you have added `return` keyword manually, you must set `autoReturn` to `false`.
