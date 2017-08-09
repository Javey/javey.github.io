Intact自带的`Animate`组件，可以在元素进入，离开和移动时，加入动画效果。你可以实现以下两类动画：

1. css动画，`Animate`组件会在元素改变时添加相应的类名
2. js动画，`Animate`组件会在元素改变时触发相应事件，让你可以操作dom来进行动画

> Vue动画例子很经典，这里我就直接拿来做说明了


# css动画

`Animate`组件会在元素enter/leave的时候增加以下类名

1. `animate-enter`: 定义元素开始进入的初始状态
2. `animate-enter-active`：定义元素进入过程中的动画效果
3. `animate-leave`: 定义元素离开后的最终状态
4. `animate-leave-active`：定义元素离开过程中的动画效果

以上这些类名的前缀`animate`可以通过`Animate`组件的`a:transition`属性改变。例如：

```html
<Animate a:transition="fade">
```

可以将`animate-enter`替换为`fade-enter`等等。


