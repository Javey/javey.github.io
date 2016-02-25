Use `ev-eventName` property to bind event.

```html
<div ev-click={function(e) {console.log('clicked')}}>click me</div>
```

In the event function `this` points to `window` object. Mostly we need change it via `bind` method.

```html
<div ev-click={function(e) {console.log('clicked').bind(this)}}>click me</div>
```

In template `this` points to the data rendered to the template.

We can pass arguments to the event function like below, the last argument is event object.

```html
<div ev-click={function(id, e) {console.log('clicked', id).bind(this, 1)}}>click me</div>
```

__In vdt, event does not bubble, but you can call `e.startPropagation()` to make it to bubble.__
