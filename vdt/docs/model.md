使用`v-model`指令，可以建立数据到模板的双向绑定。本质上它是如下写法的语法糖：

```jsx
<input v-model="value" />

=>

<input value={{ self.value }} 
    ev-input={function(e) {
        self.value = e.target.value;
        this.update(); 
    }.bind(this)}
/>
```

由于`v-model`编译后会添加`ev-input`属性，所以使用了`v-model`就不能再手动添加`ev-input`属性了，
其他元素如`radio` `checkbox`同理，只是它们是`ev-change`。

# 使用方法

* <!-- {.example-template} -->
    ```jsx
    <div>
        <input v-model="name" />
        <br />
        Your input: {name}
    </div>
    ```

* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        name: ''
    });
    ```
<!-- {ul:.example.dom} -->
