编译Vdt模板时，可以传入一些配置来改变编译行为

* `Vdt(source, [options])`
* `Vdt.compile(source, [options])`

其中`options`默认配置如下：

```js
{
    autoReturn: true,
    onlySource: false,
    delimiters: ['{', '}'],
    noWith: false,
    server: false
}
```

### `autoReturn`

模板的最后一个元素会被返回，这是因为编译时，会在最后一个元素前加入`return`关键词，如果你已经
手动添加了`return`关键词，则可以将该值设为`false`来阻止再次添加

```jsx
var ret;
if (isNew) {
    ret = <div>new</div>
} else {
    ret = <div>old</div>
}
// 手动返回
return ret;
```

### `onlySource`

模板编译后会调用`new Function()`来创建模板函数，如果此时存在js语法错误，则该操作会报错。

当Vdt仅仅作为middleware用于实时编译时，我们可能不关系该错误，而是将编译结果直接返回给浏览器，
在浏览器中再调试该错误。

将`onlySource`设为`true`，会阻止js语法错误，直接将编译结果取回来，如下所示：

```js
var template = Vdt.compile(source, {
    onlySource: true
});

template.source; // 获取编译结果
```

### `delimiters`

模板中js表达式分隔符，默认为一对大括号`{}`，你可以通过设置`delimiters`来改变它。

如果你想改变全局的分隔符，而不是单次编译，可以通过`Vdt.setDelimiters()`来改变

```js
// 设置单次编译的分隔符
Vdt.compile(source, {
    delimters: ['{{', '}}']
});

// 设置全局分隔符
Vdt.setDelimiters(['{{', '}}']);
```

### `noWith`

在模板中，获取传入模板的数据，并不需要通过对象访问操作符`.`来获取属性值，如：`obj.name`，
这是因为Vdt会将模板包含在`with (obj) {  }`下面。

但这会影响对象访问的性能，我们可以通过将`noWith`设为`true`，来去掉该包装。
此时我们可以通过`scope`或者`this.data`来访问属性，如：
`scope.name`，`this.data.name`。

```jsx
<div>{scope.name} {this.data.name}</div>
```

```js
var vdt = Vdt(source, {
    noWith: true
});

vdt.render({
    name: 'Vdt'
});
```

### `server`

该值用来标识前端还是后端渲染
    * `true` 后端渲染
    * `false` 前端渲染
