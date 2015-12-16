> vdt is short for virtual-dom template

`Vdt` is a template engine based on virtual-dom technology.
It is inspired by [React](https://github.com/facebook/react)/[virtual-dom](https://github.com/Matt-Esch/virtual-dom),
and uses [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) as template syntax.

See [TodoMVC](http://javey.github.io/vdt-todomvc/) implemented by `Vdt`

# Features

* Just the ui. Just the template further more. But more powerful than common template.
* Virtual-dom. Diff update unlike [Handlebars](https://github.com/daaain/Handlebars)/[mustache.js](https://github.com/janl/mustache.js).
* Lightweight. Rewrite a compiler instead of [jstransform](https://github.com/facebook/jstransform). Discard ES6 syntax sugar and JS analysis, so it's faster.
* Template can be extended. `<t:template>` `<b:block>`
* Easy to use. You can use it with any other js library, such as jQuery. See [vdt-todomvc](https://github.com/Javey/vdt-todomvc)

# Install

For npm

```shell
npm install vdt --save
```

For bower

```shell
bower install vdt --save
```

# Example

<div id="example_container"></div>
<script type="text/vdt" id="example_template">
    <div>
        <p>Hello {name}</p>
        <p>Now: {time}</p>
    </div>
</script>

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Hello Vdt</title>
    <script type="text/javasciprt" src="dist/vdt.js"></script>
</head>
<body>
    <div id="example_container"></div>
	<script type="text/vdt" id="example_template">
		<div>
		    <p>Hello {name}</p>
		    <p>Now: {time}</p>
		</div>
	</script>

	<script type="text/javascript">
		var template = document.getElementById("example_template").innerHTML,
		    vdt = Vdt(template),
		    dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});
		
		document.getElementById("example_container").appendChild(dom);

		setInterval(function() {
		    vdt.data.time = new Date().toLocaleTimeString();
		    vdt.update();
		}, 1000);
	</script>
</body>
</html>
```
