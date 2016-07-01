As mentioned in [Vitrual-Dom VNode](https://github.com/Matt-Esch/virtual-dom/blob/master/docs/vnode.md), properties have several special cases.

#### What properties can be rendered to html?

In HTML, most attributes have two face: the `content attribute` and the `IDL attribute`.

The content attribute can be setted or getted via `element.setAttribute()` or `element.getAttribute()`. While the IDL attribute can be setted or getted like javascript object, i.e. `element.foo`.

##### Available attributes can be rendered to html.

Refer to [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) ([HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) for example).

Attribute's name must be `lowerCamlCase` style instead of `lowercase` style, such as `maxLength` instead of `maxlength` in input element. However `class` attribute is an exception.
You can use `class` instead of `className`. `className` is also right of course.

```js
<input maxLength="10" />
{/* instead of */}
<input maxlength="10" />
```

##### Properties.attributes can be rendered to html.

Everything in the `properties.attributes` object will be rendered to html. So you can set custom attributes in this object.
For example:

```js
<input attributes={{maxlength: 10, hello: 'world'}} />
```

will be rendered

```html
<input maxlength="10" hello="world" />
```

#### How to set `Boolean` type attribute?

1. `"true"/"false"` is doesn't work. Because as to `String`, `"true"` and `"false"` are all `true`.
2. Setting in attributes object is doesn't work. Because every value in attributes object will be converted to `String`.

So the fllowing examples don't work.

```js
<input readOnly="false" />
```

and

```js
<input attributes={{readonly: false}} />
```

They will be all rendered to:

```html
<input readonly="false" /> <!-- readonly is true as long as defined the attribute -->
```

##### Use genuine `true/false`

We can set `true/false` to attribute just like set a variable to it. For example:

```js
<input readOnly={false} />
```

will be rendered

```html
<input />
```
