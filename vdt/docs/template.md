Vdt中默认使用一对大括号`{}`作为分隔符，在`{}`中书写的合法的js表达式，但这个表达式必须满足一个条件：

__表达式的值必须是是：`Number`, `String`, `null`, `undefined`以及模板引用中的一种，或者是由以上类型组成的数组__

__Vdt不会检测变量的是否存在，如果不存在会导致程序报错中断，所以需要自己处理异常逻辑__

以下是合法表达式

```html
<div>{ 1 }</div> // 合法，Number，<div>1</div>

<div>{ 'abc' }</div> // 合法，String，<div>abc</div>

<div>{ null }</div> // 合法，null，将被渲染成空节点，<div></div>

<div>{ undefined }</div> // 合法，undefined，同上，<div></div>

var a = <div>{ 1 }</div>
<div>{ a } </div> // 合法，模板引用，<div><div>1</div></div>

<div>{ [1, 'abc', a, undefined, null] }</div> // 合法，由合法类型组成的数组，<div>1abc<div>1</div></div>

<div>{ true ? 'a' : 'b' }</div> // 合法，String，<div>a</div>

<div>{ ['a', 'b', 'c'].map(function(item) {
    return item + '1';
}) }</div> // 合法，Array<String>，<div>a1b1c1</div>
```

以下写法不合法

```html
<div>{ {a: 1, b: 2} }</div> // 不合法，Object不能渲染

<div>{ if (true) { 'a' } else { 'b' } }<div> // 不合法，if语句不是表达式，可以使用三元操作符
```

理解上述规则后，下面的概念也就一目了然了

## 变量

输出一个变量，需要确保变量存在，如果是输出某个对象的属性，该对象也必须存在

```html
<div>{name}</div>
<div>{data.name}</div>
<div>{data['name']}</div>
```

## 函数调用

Vdt中没有过滤器的概念，但可以调用函数来达到类似的目的

```html
<div>{foo(name)}</div>
<div>{arr.join(',')}</div>
```

## if & else & else if 

逻辑控制，是三元操作符的语法糖，你也可以使用三元操作符来实现

```html
<div v-if={a === 1}>一</div>
<div v-else-if={a === 2}>二</div>

<div v-else>这个数子好诡异</div>
```

`v-if & v-else-if & v-else`必须连起来写，中间不能穿插非空节点，否则会失效

## 循环

`v-for`指令用于实现循环，你也可以使用`[].map`来先实现，但该指令支持遍历对象

```html
<ul>
    <li v-for={items}>{key}: {value}</li>
</ul>
```

* `key`指向对象的键，如果是数组则指向数组的索引
* `value`指向对象或数组的值

你也可以通过`v-for-key & v-for-value`来改变键值的命名

```html
<ul>
    <li v-for={items} v-for-key="name" v-for-value="age">
        {name}: {age}
    </li>
<ul>
```

## 宏函数

宏能使你定义一块可以被服用的模板，Vdt中没有宏的概念，但可以通过函数实现该功能

```jsx
var FormItem(attrs) {
    return <div class="form-item">
        <label>
            <span v-if={attrs.required}>*</span>{attrs.label}:
            {attrs.children}
        </label>
    </div>
};

<form>
    <FormItem required={true} label="姓名">
        <input type="text" name="name" />
    </FormItem>
</form>
```

* 宏函数名必须以大写字母开头
* 传递给宏函数的参数是引用宏函数所定义的属性组成的对象
* 可以通过`attrs.children`来引用宏函数的子元素

## 设置临时变量

在标签语法的外部，可以书写任意的js代码，所以我们可以在模板顶部定义函数和变量；

另外在模板内部，可以通过自执行函数进入js代码区域

```html
var a;
var template = <span>新人</span>

<div>
    {function() {
        if (isNew) {
            a = 1;
        } else {
            a = 2;
        }
    }.call(this)} 
    <div v-if={a === 1}>{template}</div>
</div>
```

上述例子展示了如何在标签语法和js语法来回切换，标签语法可以直接穿插在js语法中，从标签语法
进入js语法可以使用自执行函数

* 自执行函数的返回值必须合法，会当做结果渲染到页面，可以返回`undefined | null`来阻止渲染
* 自执行函数不应该改变`this`指向，所以应该通过`call(this)`的方式调用

## 继承

继承能够创建复用的模板，定义页面的骨架，然后被子模板填充，而且子模板又可以被继承。

继承主要通过两个标签语法实现

* `<t:template>` 定义要继承的父模板
* `<b:block>` 父模板中定义可以被填充的区域，子模板中定义填充到父模板的指定区域

定义父模板`layout.vdt`

```jsx
<div>
    <b:header>
        <div>父模板头部</div>
    </b:header>
    <div>
        <b:content>父模板内容</b:content>
    </div>
</div>
```

定义子模板继承父模板

* 在后端渲染时，可以直接使用`require()`方法加载父模板
    ```jsx
    var layout = require('./layout');

    <t:layout>
        <b:header>
            <div>子模板头部</div>
        </b:header>
        <b:content>
            {parent()}
            <div>子模板内容</div>
        </b:content>
    </t:layout>
    ```









