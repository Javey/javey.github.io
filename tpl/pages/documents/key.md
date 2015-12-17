Every element has a property named `key`. If you specified it, it must be different between siblings. The `key` property can be used to identify every sibling and
increase efficiency when differing two elements.

Let's take a look at the problem: how to change an array `[1, 2, 3]` to `[1, 3]`?

We have two following methods.

1. Replace the second value `2` with `3`, then remove the last value `3`. i.e. `[1, 2, 3]` -> `[1, 3, 3]` -> `[1, 3]`.
2. Remove the second value `2` directly. i.e. `[1, 2, 3]` -> `[1, 3]`.

Obviously the second method is more efficient. With the `key` property, virtual dom will update element via the second method. Otherwise the first one will be taken.

Because `vdt` will remove the element when the `key` is not in the next siblings, and add an element when the `key` is not in the previous siblings, 
it can be very useful when you want to remove or add an element, especially when you have modified dom directly. 

The fllowing demonstration will show that. Assume that you have the fllowing usage.

The template

```js
<ul>
    {list.map(function(item) {
        return <li>{item}</li>
    })}
</ul>
```
The data

```js
var list = ['book', 'food', 'cook'],
    vdt = Vdt(template), // `template` is the string of preceding template
    dom = vdt.render({list: list});
```

Then you modify the second element `li`.

```js
var textNode = document.createTextNode(' text');
document.getElementsByTagName('li')[1].appendChild(textNode);
```

The output

```html
<ul>
    <li>book</li>
    <li>food text</li>
    <li>cook</li>
</ul>
```

If you have removed the value of `food` and want remove the corresponding `li` element. 

```js
list.splice(1, 1);
vdt.update(); // list === vdt.data.list
```

The output will be

```html
<ul>
    <li>book</li>
    <li>cook text</li>
</ul>
```

The second `li` element did not be removed, in fact, the third `li` element has been removed. Because virtual dom updates element via the first preceding method.

With the `key` property, it will do what you want.

Edit the template as below.

```js
<ul>
    {list.map(function(item) {
        return <li key={item}>{item}</li>
    })}
</ul>
```

Then the output will be

```html
<ul>
    <li>book</li>
    <li>cook</li>
</ul>
```

#### Demo

##### Without key

<div id="without_key"></div>

#### With key

<div id="with_key"></div>

<script type="text/vdt" id="without_key_template">
    <div>
        <button ev-click={addText.bind(this)} disabled={isRemoved}>Modify the second 'li' directly</button>
        <button ev-click={remove.bind(this)} disabled={isRemoved}>Remove the second value 'food'</button>
        <ul>
            {list.map(function(item) {
                return <li>{item}</li>
            })}
        </ul>
    </div>
</script>

<script type="text/vdt" id="with_key_template">
    <div>
        <button ev-click={addText.bind(this)} disabled={isRemoved}>Modify the second 'li' directly</button>
        <button ev-click={remove.bind(this)} disabled={isRemoved}>Remove the second value 'food'</button>
        <ul>
            {list.map(function(item) {
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
</script>


