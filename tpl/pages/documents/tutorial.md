In this tutorial, we're going to implement a simple todo-list demo like below.

<div id="todo_demo"></div>
<script type="text/vdt" id="todo_template">
    <div class="todos">
        <input value={input} ev-change={add} />
        <ul>
            {todos.map(function(todo, index) {
                return <li class={"todo-item " + (index % 2 ? "even" : "odd")} ev-dblclick={remove.bind(this, index)}>{index}: {todo.name}</li>
            }, this)}
        </ul>
    </div>
</script>

#### Define a model

Firstly, define a model which will be rendered to template. There is an array `todos` in this model

```js
var model = {
    todos: [
        {name: "todo"}
    ]
};
```

#### Define the vdt template

##### Wrap all element as one

The template mainly includes two element, one is `input`, another one is `ul`. 
But we must wrap all element as one. Because only the last element will be returned in vdt.

```html
<div class="todos">
    <input />
    <ul>
        <li class="user">0: todo</li>
    </ul>
</div>
```

##### Dynamic template

Preceding template just a static template. Mostly we need render dynamic data to template.
In this demonstration, we need do following things.

1. Output a variable
2. Traverse todos list and output `li` element
3. Add `even` or `odd` class attribute in `li` element

Only `String`, `Number` and `Template` can be ouputted. Moreover an array which only contains values belongs to preceding types can also be outputted.
You can't ouput a object even if it can be stringified.
When output something, use brace `{}` to wrap it.

As was mentioned above, we can output an array which contains `Template` values. So traverse `todos` list and create a `Template` array.
Any javascript code can be written before the element which will be returned.

```js
var lis = [];
for (var index = 0, l = todos.length; index < l; index++) {
    lis.push(<li class="todo-item">{index}: {todos[index].name}</li>);
}
<div class="todos">
    <input />
    <ul>{lis}</ul>
</div>
```

With the aid of `map()` method, things will be simple. The `map()` method which provided in es5 or `underscore/lodash` will return an `array`.
This is different from `each()/forEach()` method which will return `undefined`.

```js
<div class="todos">
    <input />
    <ul>
        {todos.map(function(item, index) {
            return <li class="todo-item">{index}: {item.name}</li>
        })}
    </ul>
</div>
```

Add even or odd className for `li`. We can use `? :` operation instend of `if else` in brace.

```js
<div class="todos">
    <input input={input} />
    <ul>
        {todos.map(function(item, index) {
            return <li class={"todo-item " + (index % 2 ? "even" : "odd")}>{index}: {item.name}</li>
        })}
    </ul>
</div>
```

##### Bind event

Use `ev-*` attribute to bind a event. In event callback function `this` points to the `window` object. Mostly we need change it via `bind` method.
In template `this` points to the data which rendered to the template. It is useful.

```js
<div class="todos">
    <input input={input} ev-change={add}/>
    <ul>
        {todos.map(function(item, index) {
            return <li class={"todo-item " + (index % 2 ? "even" : "odd")} ev-dblclick={remove.bind(this, index)>{index}: {item.name}</li>
        }, this)}
    </ul>
</div>
```

Then we add some event callback methods to the preceding model.

```js
var model = {
    todos: [
        {name: "todo"}
    ],
    input: "",

    add: function(e) {
        // in this function `this` points to window
        model.todos.push({name: e.target.value});
        model.input = "";
    },

    remove: function(index) {
        // in this function `this` points to model
        this.todos.splice(index, 1);
    }
};
```

#### Compile template

Call `Vdt.compile()` method to compile a template. The method will return a template function. When you call the function directly a `vnode` will be returned.
`vnode` is a concept of `virtual-dom`. The `vnode` is useful sometimes, we can pass it to another template. Call `Vdt()` method to create a vdt object. The method can take a template string
or a template function as parameter. It will call `Vdt.compile()` method when a template string passed in.

```js
var source = document.getElementById("#template").innerHTML,
    template = Vdt.compile(source),
    vdt = Vdt(template); // or vdt = Vdt(source) 
```

#### Render template

Call `vdt.render()` method to render a template. The method will return a dom. It differs from other template engine which return a html string.
So we can update it easily and efficiently.

```js
var dom = vdt.render(model);
    document.getElementById("#example").appendChild(dom);
```

#### Update template

We can modify the data which rendered to template by modifing `vdt.data` directly. But the template does not update ui when you modified the data automatically like mvvm framework.
Call `vdt.update()` to update ui. So we must alter the event callback method in preceding model to make ui update.

```js
var model = {
    todos: [
        {name: "todo"}
    ],
    input: "",

    add: function(e) {
        // in this function `this` points to window
        model.todos.push({name: e.target.value});
        model.input = "";
        vdt.update(); // update ui
    },

    remove: function(index) {
        // in this function `this` points to model
        this.todos.splice(index, 1);
        vdt.update(); // update ui
    }
};
```

__The thing has been done so far. It is simple, isn't it?__
