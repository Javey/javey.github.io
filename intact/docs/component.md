# 什么是组件

生活中，组件的概念无处不在，小到你正在使用的计算机，大到宏伟的建筑，无不都是通过一个个小组件构成。
本质上Intact是一个组件基础类库，它仅仅规范了组件的定义与使用方式，并没有规范代码结构等东西。
对于web开发来说，每一个html标签也可以看做一个组件，为了满足更高级的封装，w3c提出了`Shadow DOM`
的概念，它让我们可以基于简单的html标签，构建更复杂的标签，并且赋予它样式以及逻辑。

所以，组件是结构，样式，逻辑的封装，即前端三大块`html & css & javascript`。关键在与怎么封装他们，
来提高他们的易用性和复用性，而这正是Intact要解决的问题。

```
结构 + 样式 + 逻辑 = 组件
```

# 定义组件 

使用`Intact.extend(properties)`方法就可以定义一个组件

* `properties` 定义组件原型链属性和方法

```js
var Component = Intact.extend({ });
```
<!-- {.example} -->

上例中定义的组件，并不能直接使用，因为没有个`template`的组件不能实例化，它更像一个抽象类，
可供其他组件继承。

以继承父组件的方式定义组件：

```js
var SubComponent = Component.extend({
    template: '<div>sub-component</div>'
});
```
<!-- {.example} -->

## 默认数据 `defaults`

定义组件是有个关键属性`defaults`，它用来定义组件的默认数据。在组件实例化时，会和传入组件的属性
进行合并`Object.assign()`，然后将合并的结果作为组件的实际数据。

`defaults`支持两种取值类型：`Object & Function`。

### `Object`类型

```js
var Component;
Component = Intact.extend({
    template: '<div>a = {self.get("a")}</div>',
    defaults: {
        a: 1
    }
});
```
<!-- {.example.auto} -->

如果以`Object`类型定义defaults，在组件继承时，会自动合并。

```js
var SubComponent;
SubComponent = Component.extend({
    template: '<div>a = {self.get("a")}<br />b = {self.get("b")}</div>',
    defaults: {
        b: 2
    }
});
```
<!-- {.example.auto} -->

可以看到，`SubComponent`组件并没有定义`a`属性，但是在模板中却取到了`a`，这是因为继承`Component`时，
也继承了它的默认数据。

这种方式在定义组件时非常方便，但如果使用不当，会存在以下问题。

```js
var Component = Intact.extend({
    template: '<div>\
        <button ev-click={self.add.bind(self)}>+1</button>\
        a.a = {self.get("a.a")}\
    </div>',
    defaults: {
        a: {a: 1}
    },
    add: function() {
        this.set('a.a', this.get('a.a') + 1);
    }
});
```
<!-- {.example} -->

```html
var Component = self.Component;

<div>
    <Component />
    <Component />
</div>
```
<!-- {.example} -->

```js
Intact.extend({
    template: template,
    _init: function() {
        this.Component = Component;
    }
});
```
<!-- {.example.auto} -->

当我们点击第一个+1按钮增加第一个组件的的`a.a`的值，然后点击第二个+1按钮，发现第二个组件`a.a`的值并没有从1开始增加，
而是从一个组件最后的值开始增加，看起来两个组件的数据共用了。这显然不是我们想要的，保持组件数据的独立性，才是我们的目的。

其实这一切的根源是由于Intact合并数据时，使用的`Object.assign()`，而这只是一个浅拷贝函数，对于生成嵌套的引用类型，
仍然拷贝的是引用。在组件继承时，也存在同样的问题。

所以在你的数据存在嵌套时，我们应该使用`Function`定义`defaults`，它每次都会返回一份新数据。

> 如果你不确定数据嵌套层次，每次使用`Function`定义`defaults`是推荐的做法

### `Function`类型

使用`Function`定义`defaults`，应该返回一个`Object`。

```js
var Component = Intact.extend({
    template: '<div>\
        <button ev-click={self.add.bind(self)}>+1</button>\
        a.a = {self.get("a.a")}\
    </div>',
    defaults: function() {
        return {
            a: {a: 1}
        };
    },
    add: function() {
        this.set('a.a', this.get('a.a') + 1);
    }
});
```
<!-- {.example} -->

```html
var Component = self.Component;

<div>
    <Component />
    <Component />
</div>
```
<!-- {.example} -->

```js
Intact.extend({
    template: template,
    _init: function() {
        this.Component = Component;
    }
});
```
<!-- {.example.auto} -->

此时，每个组件的数据是独立的了。

> 采用`Function`类型定义`defaults`，在组件继承时，并不会自动合并数据，
> 如果有需要你可以显示地调用父类的`defaults`方法，获取到父类定义的数据，
> 然后在手动合并返回。关于如何在子类调父类方面，下面会说明。

## 模板 `template`

另一个组件的重要属性便是`template`，它用来定义组件的模板。它既可以传入模板字符串，
又可以传入模板函数，如果传入模板字符串，会调用`Intact.Vdt.compile()`方法将之编译成模板函数。
模板语法请参考[模板语法][1]章节。

> 模板必须返回一个（仅一个）元素

对于模板函数，你也可以像下面一样手动编译生成。

```js
Intact.extend({
    template: Intact.Vdt.compile('<div>component</div>')
});
```
<!-- {.example.auto} -->

> 将模板字符串写入组件会是组件看起来混乱，不利于维护。
> 借助webpack和[`vdt-loader`][2]我们可以将模板拆分成单独的文件

# 组件使用

有两种方式将组件渲染组件：

1. 对于根组件，调用`Intact.mount()`方法，直接将组件挂载到指定的元素下
2. 对于子组件，可以在模板中当做标签引入

我们将上述`SubComponent`当做根组件，挂载到`#app`下

```js
Intact.mount(SubComponent, document.getElementById('app'));
```
<!-- {.example} -->

<div class="output"><div id="app"></div></div>

也可以将上述`SubComponent`当做子组件

```html
var SubComponent = self.SubComponent;

<div>
    当做子组件引入
    <SubComponent />
</div>
```
<!-- {.example} -->

```js
var App = Intact.extend({
    template: template,
    _init: function() {
        this.SubComponent = SubComponent;
    }
});

Intact.mount(App, document.getElementById('app1'));
```
<!-- {.example} -->

<div class="output"><div id="app1"></div></div>

# 组件通信

## 父子组件通信





[1]: #/document/syntax
[2]: https://github.com/Javey/vdt-loader
