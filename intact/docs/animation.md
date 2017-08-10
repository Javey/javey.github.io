Intact自带的`Animate`组件，可以在元素进入，离开和移动时，加入动画效果。你可以实现以下两类动画：

1. css动画，`Animate`组件会在元素改变时添加相应的类名
2. js动画，`Animate`组件会在元素改变时触发相应事件，让你可以操作dom来进行动画

> Vue动画例子很经典，这里我就直接拿来做说明了

# 使用方式

`Animate`的使用方式是，将你需要做动画的元素改成`Animate`组件即可，例如：

```html
<div v-if={self.get('show')}>show</div>

=>

<Animate v-if={self.get('show')}>show</div>
```

上述`Animate`组件会默认渲染成`div`元素，你可以通过`a:tag`改变这一规则

```html
<Animate a:tag="span" v-if={self.get('show')}>show</Animate>
```

这样`Animate`就渲染成`span`元素了。

> `Animate`组件为内部定义的组件，你无需引入它

# CSS动画

## 类名

`Animate`组件会在元素enter/leave的时候增加以下类名

1. `animate-enter`: 定义元素开始进入的初始状态
2. `animate-enter-active`：定义元素进入过程中的动画效果
3. `animate-leave`: 定义元素离开后的最终状态
4. `animate-leave-active`：定义元素离开过程中的动画效果

以上这些类名的前缀`animate`可以通过`Animate`组件的`a:transition`属性改变。例如：

```html
<Animate a:transition="fade">
```

可以将`animate-enter`替换为`fade-enter`，其它类名也一样。

## `transition`动画

通过css动画的类名，我们可以很方便地定义`transition`动画。

```html
<div>
    <button
        ev-click={self.set.bind(self, 'show', !self.get('show'))}
    >展示或隐藏</button>
    <Animate v-if={self.get('show')}>show</Animate>
</div>
```
<!-- {.example} -->

```css
.animate-enter, .animate-leave {
    opacity: 0;
    transform: translateX(10px);
}
.animate-enter-active, .animate-leave-active {
    transition: all 1s;
}
```
<!-- {.example} -->

```js
Intact.extend({template: template});
```
<!-- {.example.auto} -->

## `animation`动画

你可以可以使用css `animation`属性来设置动画。

```html
<div>
    <button
        ev-click={self.set.bind(self, 'show', !self.get('show'))}
    >展示或隐藏</button>
    <Animate v-if={self.get('show')}
        a:transition="fade"
    >show</Animate>
</div>
```
<!-- {.example} -->

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(10px);
    }
}
.fade-enter {
    opacity: 0;
    transform: translateX(10px);
}
.fade-enter-active {
    animation: fadeIn 1s;
}
.fade-leave-active {
    animation: fadeOut 1s;
}
```
<!-- {.example} -->

```js
Intact.extend({template: template});
```
<!-- {.example.auto} -->

> 因为`Animate`会在下一帧才添加`fade-enter-active`类名，你需要给`fade-enter`添加初始化
> 样式，否则会存在闪动

> 不要同时使用`transition`与`animation`，会使问题变得复杂。

# JS动画

`Animate`会在动画过程中，触发以下事件：

1. `a:enterStart` 元素进入时触发
2. `a:enter` 元素进入过程中触发
3. `a:enterEnd` 元素进入结束时触发
5. `a:leaveStart` 元素离开时触发
6. `a:leave` 元素离开过程中触发
7. `a:leaveEnd` 元素离开结束时触发

其中，事件回调函数为：

1. `a:enterStart & a:enterEnd & a:leaveStart & a:leaveEnd`事件的回调：`callback(element)`
    * `element`为进行动画的DOM元素

2. `a:enter & a:leave`事件回调：`callback(element, done)`
    * `element`为进行动画的DOM元素
    * `done`动画结束回调函数，该函数调用后，会触发相应的`end`事件

一个使用jQuery动画的例子

```html
<div>
    <button
        ev-click={self.set.bind(self, 'show', !self.get('show'))}
    >展示或隐藏</button>
    <Animate v-if={self.get('show')}
        ev-a:enterStart={self.enterStart.bind(self)}
        ev-a:enter={self.enter.bind(self)}
        ev-a:leave={self.leave.bind(self)}
        a:transition="none"
    >show</Animate>
</div>
```
<!-- {.example} -->

```js
Intact.extend({
    template: template,

    enterStart: function(el) {
        $(el).css({
            'opacity': 0,
            'transform': 'translateX(10px)'
        });
    },

    enter: function(el, done) {
        $(el).animate({
            opacity: 1,
            'transform': 'translateX(0)'
        });
    },

    leave: function(el, done) {
        $(el).animate({opacity: 0}, {
            complete: done
        });
    }
});
```
<!-- {.example.auto} -->
