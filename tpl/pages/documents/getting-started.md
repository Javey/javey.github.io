#### Step 1

Including the script. You can install it by `npm`, `bower` or downloading it directly.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Hello Vdt</title>
    <script type="text/javasciprt" src="dist/vdt.js"></script>
</head>
<body>
    <div id="example"></div>
</body>
</html>
```

#### Step 2

Define a vdt template. Template is a string, so you can define it in html with script tag like below. 
We'll compile it in browser later. You'd better to precompile it when in production environment.

```html
<script type="text/vdt" id="example_template">
    <div>
        <p>Hello {name}</p>
        <p>Now: {time}</p>
    </div>
</script>
```

#### Step 3

Compile the template and render it. The rendered result is a dom rather than a html string. Then append the dom to `div#example`.

```html
<script type="text/javascript">
    var template = document.getElementById("example_template").innerHTML,
        vdt = Vdt(template),
        dom = vdt.render({name: "Vdt", time: new Date().toLocaleTimeString()});
    
    document.getElementById("example").appendChild(dom);
</script>
```

#### Step 4

Modify the data `vdt.data` rendered to the template, then update the template by calling `vdt.update()` method.

```html
<script type="text/javascript">
    setInterval(function() {
        vdt.data.time = new Date().toLocaleTimeString();
        vdt.update();
    }, 1000);
</script>
```

#### Result

<div id="example"></div>
<script type="text/vdt" id="example_template">
    <div>
        <p>Hello {name}</p>
        <p>Now: {time}</p>
    </div>
</script>
