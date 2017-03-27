Vdt模板编译的结果，会添加如下代码

```js
function(obj) {
    var self = this.data, scope = obj;

    ....
}
```

`vdt.render()`方法这样调用模板函数

```js
template.call(this, data);
```

