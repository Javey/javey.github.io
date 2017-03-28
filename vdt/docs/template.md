Vdt中默认使用一对大括号`{}`作为分隔符，在`{}`中书写合法的js表达式，但这个表达式必须满足一个条件：

__表达式的值必须是：`Number`, `String`, `null`, `undefined`或模板引用中的一种，或者是由上述类型组成的数组__

__Vdt不会检测变量是否存在，变量不存在会导致程序报错中断，所以需要自己处理异常逻辑__

以下是合法表达式

```html
<div>{ 1 }</div>                                  // 合法，Number，<div>1</div>

<div>{ 'abc' }</div>                              // 合法，String，<div>abc</div>

<div>{ null }</div>                               // 合法，null，将被渲染成空节点，<div></div>

<div>{ undefined }</div>                          // 合法，undefined，同上，<div></div>

var a = <div>{ 1 }</div>
<div>{ a } </div>                                 // 合法，模板引用，<div><div>1</div></div>

<div>{ [1, 'abc', a, undefined, null] }</div>     // 合法，由合法类型组成的数组，<div>1abc<div>1</div></div>

<div>{ true ? 'a' : 'b' }</div>                   // 合法，String，<div>a</div>

<div>{ ['a', 'b', 'c'].map(function(item) {
    return item + '1';
}) }</div>                                        // 合法，Array<String>，<div>a1b1c1</div>
```

以下写法不合法

```html
<div>{ {a: 1, b: 2} }</div>                       // 不合法，Object不能渲染

<div>{ if (true) { 'a' } else { 'b' } }<div>      // 不合法，if语句不是表达式，可以使用三元操作符
```

理解上述规则后，下面的概念也就一目了然了：__都是在大括号中`{}`书写上述数据类型的表达式__

## 变量

输出一个变量，需要确保该变量存在，如果是输出某个对象的属性，该对象也必须存在

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

逻辑控制，是三元操作符的语法糖，你也直接使用三元操作符

```html
<div v-if={a === 1}>一</div>
<div v-else-if={a === 2}>二</div>

<div v-else>这个数字好诡异</div>
```

`v-if & v-else-if & v-else`必须连起来写，中间不能穿插非空节点，否则会失效

## 循环

`v-for`指令用于实现循环，你也可以使用`[].map`来实现，但该指令支持遍历对象

* <!-- {.example-template} -->
    ```html
    <ul>
        <li v-for={items}>{key}: {value}</li>
    </ul>
    ```
* <!-- {.example-js} -->
    ```json
    {
        "items" : {
            "width": "100px",
            "height": "100px"
        }
    }
    ```
<!-- {ul:.example} -->

* `key`指向对象的键，如果是数组则指向数组的索引
* `value`指向对象或数组的值

### 更改键值命名

可以通过`v-for-key & v-for-value`来改变键值的命名

* <!-- {.example-template} -->
    ```html
    <ul>
        <li v-for={items} v-for-key="name" v-for-value="age">
            {name}: {age}
        </li>
    </ul>
    ```
* <!-- {.example-js} -->
    ```json
    {
        "items" : {
            "width": "100px",
            "height": "100px"
        }
    }
    ```
<!-- {ul:.example} -->

### v-for & v-if 结合使用

`v-for`指令和`v-if`一起使用时，用于控制单条数据是否展示，并非控制整体`v-for`是否展示；

`v-if`中能够使用`v-for`提供的两个变量`key & value`，与书写顺序无关

* <!-- {.example-template} -->
    ```html
    <ul>
        <li v-for={items} v-if={key === 'width'}>{key}: {value}</li>
    </ul>
    ```
* <!-- {.example-js} -->
    ```json
    {
        "items" : {
            "width": "100px",
            "height": "100px"
        }
    }
    ```
<!-- {ul:.example} -->


## 宏函数

宏使你能够定义一块可复用的模板，Vdt中没有宏的概念，但可以通过函数实现该功能

* <!-- {.example-template} -->
    ```jsx
    var FormItem = function(attrs) {
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
        <FormItem required={true} label="密码">
            <input type="password" name="password" />
        </FormItem>
    </form>
    ```
<!-- {ul:.example} -->

* 宏函数名必须以大写字母开头
* 传递给宏函数的参数是引用宏函数所定义的属性组成的对象
* 可以通过`attrs.children`来引用宏函数的子元素

## 设置临时变量

在标签语法的外部，可以书写任意的js代码，vdt支持在模板顶部定义函数和变量；

另外在模板内部，也可以通过自执行函数进入js代码区域

* <!-- {.example-template} -->
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
* <!-- {.example-js} -->
    ```json
    {"isNew": true}
    ```
<!-- {ul:.example} -->

上述例子展示了如何在标签语法和js语法间来回切换，标签语法可以直接穿插在js语法中，在标签语法
中使用自执行函数可以切换到js语法

* 自执行函数的返回值必须合法，返回值会当做结果渲染到页面，可以返回`undefined | null`来阻止渲染
* 自执行函数不应该改变`this`指向，所以应该通过`call(this)`的方式调用

## 继承

继承能够创建可复用的模板，定义页面的骨架，然后被子模板填充，子模板又可以作为父模板被继承。

继承主要通过两个标签语法实现

* `<t:template>` 定义要继承的父模板
* `<b:block>` 父模板中定义可以被填充的区域，子模板中定义填充到父模板指定区域的相关内容

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

### 模板加载

* 后端渲染时，可以直接使用`require()`方法加载父模板
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

* 浏览器渲染时，有多种方法来加载父模板

    1. 你可以直接将父模板编译后传入子模板的`render`方法中，此时模板的加载任务在模板外部进行

        如果你采用纯前端编译运行，你的模板可以定义在html中，类似这样
        ```html
        <script type="text/vdt" id="parent_template">
            <div>
                <b:header>
                    <div>父模板头部</div>
                </b:header>
                <div>
                    <b:content>父模板内容</b:content>
                </div>
            </div>
        </script>
        ```

        由于模板加载的任务在模板外部进行，此时你的子模板无需处理父模板的加载，只需`render`时传入父模板即可
        ```html
        <script type="text/vdt" id="child_template">
            <t:layout>
                <b:header>
                    <div>子模板头部</div>
                </b:header>
                <b:content>
                    {parent()}
                    <div>子模板内容</div>
                </b:content>
            </t:layout>
        </script>
        ```

        然后在前端实时编译`Vdt.compile(source)`父模板，传入子模板中
        ```js
        var layout = Vdt.compile(document.getElementById('parent_template').text()),
            vdt = Vdt(document.getElementById('child_template').text());
        // 在render方法中，传入编译好的父模板
        vdt.render({layout: layout});
        ```
    2. 大部分时候，我们都是将模板拆分成单独的文件，然后前端按需加载，此时我们需要一种方法来加载模板文件。
    当然你可以使用`$.ajax({dataType: 'text'})`的方式来异步加载模板，然后前端实时编译。
    但从性能上考虑，更推荐前端使用模块加载器`RequireJs`等工具来加载编译好的文件。
        * 在开发环境下，使用`Vdt.middleware`可以很方便地将`Vdt`实时编译成`js`文件
        * 在生产环境下，可以使用[gulp-vdt][1]插件将`Vdt`提前编译成`js`文件

        上述工具可以将模板编译成`amd`风格的模块，所以我们可以在模板中直接加载当前模板所需的依赖，
        将模板的依赖交给模板自己处理

        使用`RequireJs`加载模板的例子

        父模板`layout.vdt`定义不变，子模板`child.vdt`中处理模板加载，需要注意路径问题
        ```jsx
        // 注意RequireJs加载文件路径配置
        var layout = require('/static/js/layout');

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

        ```js
        // 我们无需关系模板的依赖，只需要申明自己的依赖即可
        define(['/static/template/child'], function(childTemplate) {
            var vdt = Vdt(childTemplate);
            vdt.render();
        });
        ```

    3. 借助`webpack`打包工具，将所有依赖整合成单文件。`Vdt`提供了配套工具[vdt-loader][2]来加载`Vdt`模板文件

        `webpack.config.js`配置中添加

        ```js
        module: {
            loaders: [
                test: /\.vdt$/,
                loader: 'vdt-loader'
            ]
        }
        ```

        此时在子模板中，注意加上`vdt`文件后缀

        ```jsx
        // 加上vdt后缀
        var layout = require('./layout.vdt');

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

        __鉴于ES6和webpack的普及，这种方式是最推荐的做法，所以后面的例子中，我们都会采用这种写法__

### 继承标签语法

模板加载的问题解决后，我们来看看`Vdt`提供的两个实现继承的标签语法

* `<t:template>` 定义要继承的父模板，其中`template`是父模板名称（非文件名）
* `<b:block>` 定义往父模板哪个区域填充内容，其中`block`为父模板中定义的`block`名称。
    以下两种情况定义的`block`将被忽略
    * 如果不存在嵌套，该`block`在父模板中找不到对应`block`名
    * 如果存在嵌套，被该`block`嵌套的`block`在父模板中找不到对应`block`名

上述例子渲染的结果如下：

* <!-- {.example-template} -->
    ```jsx
    // @file ./layout.vdt
    <div>
        <b:header>
            <div>父模板头部</div>
        </b:header>
        <div>
            <b:content>父模板内容</b:content>
        </div>
    </div>
    ```
    ```html
    var layout = require('./layout.vdt');

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
<!-- {ul:.example} -->

### 引用父级`parent()`

有时候，继承父模板后不一定要完全替换所有父模板中定义的内容，此时可以通过`parent()`方法来
引用当前`block`对应的父模板中的内容，你可以将该内容插在当前`block`的任意地方，若有必要，你可以调用该方法任意次

* <!-- {.example-template} -->
    ```jsx
    // @file ./layout.vdt
    <div>
        <b:content>
            父模板内容
        </b:content>
    </div>
    ```
    ```jsx
    var layout = require('./layout.vdt')
    <t:layout>
        <b:content>
            {parent()}
            前面插一份
            {parent()}
            中间插一份
            后面插一份
            {parent()}
        </b:content>
    </t:layout>
    ```
<!-- {ul:.example} -->

### `block`嵌套

`block`可以任意嵌套，但在一个模板中要保证`block`名称不重复

* <!-- {.example-template} -->
    ```jsx
    // @file ./layout.vdt
    <div>
        <b:body>
            <aside>
                <b:sidebar>边栏</b:sidebar>
            </aside>
            <article>
                <b:content />
            </article>
        </b:body>
    </div>
    ```
    ```jsx
    // @file ./child.vdt
    var layout = require('./layout.vdt');

    <t:layout>
        <b:content>只修改content block</b:content>
    </t:layout>
    ```
<!-- {ul:.example} -->

### 多重继承

模板可以继承后再被继承，继承链可以任意长

* <!-- {.example-template} -->
    ```jsx
    var child = require('./child.vdt');

    <t:child>
        <b:sidebar>
            来自孙模板的边栏
            {parent()}
        </b:sidebar>
        <b:content>
            {parent()}
            来自孙模板的内容
        </b:content>
    </t:child>
    ```
<!-- {ul:.example} -->

## 包含

包含也是实现模板复用的一个重要功能，`Vdt`中并没有提供`include`标签语法，但是通过前面的继承语法`<t:template>`
可以很方便地实现包含

* <!-- {.example-template} -->
    ```jsx
    // @file ./list.vdt
    <table>
        <thead>
            <tr><th>ID</th><th>姓名</th></tr>
        </thead>
        <tbody>
            <td>0</td><td>Vdt</td>
        </tbody>
    </table>
    ```

    ```jsx
    var list = require('./list.vdt');

    <div>
        <h1>用户列表</h1>
        <t:list />
    </div>
    ```
<!-- {ul:.example} -->

### 传递数据

在使用`<t:template>`时，通过指定属性，可以传递数据给被包含的模板，因为`Vdt`并不会做数据校验，
因此需要自己判断数据存在性`typeof data === 'undefined'`

* <!-- {.example-template} -->
    ```jsx
    // @file ./list.vdt
    <table>
        <thead>
            <tr><th>ID</th><th>姓名</th></tr>
        </thead>
        <tbody>
            <tr v-for={typeof data === 'undefined' ? null : data}>
                <td>{key}</td><td>{value}</td>
            </tr>
        </tbody>
    </table>
    ```

    ```jsx
    var list = require('./list.vdt');

    <div>
        <h1>用户列表</h1>
        <t:list data={['Syalvia', 'Shadow', 'Javey']} />
    </div>
    ```
<!-- {ul:.example} -->

### 局部继承

`<t:template>`可以在任意地方使用，不一定是根元素，所以可以很方便地实现局部继承

* <!-- {.example-template} -->
    ```jsx
    // @file ./content.vdt
    <div>
        <h1>{title}</h1>
        <b:content>
            被包含文件的内容
        </b:content>
    </div>
    ```
    ```jsx
    var content = require('./content.vdt');

    <div>
        <t:content title="标题">
            <b:content>
                包含文件内容
                {parent()}
            </b:content>
        </t:content>
    </div>
    ```
<!-- {ul:.example} -->

## 转义 

`Vdt`默认会对任何输出转义

* <!-- {.example-template} -->
    ```jsx
    <div>{'<script>alert(1)</script'}</div>
    ```
<!-- {ul:.example} -->

通过`innerHTML`属性，可以阻止转义（本质上就是`element.innerHTML`）

* <!-- {.example-template} -->
    ```jsx
    <div innerHTML={'<script>alert(1)</script>'}></div>
    ```
<!-- {ul:.example} -->

## 注释

Vdt没有提供特殊的注释写法，有的只是js和html的注释，所以注释分为两种：
1. 在标签语法里面，可以书写html注释`<!-- 注释 -->`
2. 在js语法里面，可以书写js注释`// 注释` `/* 注释 */`

* <!-- {.example-template} -->
    ```jsx
    // 注释
    <div>
        <!-- 注释 -->
        <h1>标题</h1>
        {// 注释
        }
        {/* 注释 */}
        <div>内容</div>
    </div>
    ```
<!-- {ul:.example} -->

需要注意的是：

1. `// 注释`单行注释需要换行，所以不建议使用，而是使用多行注释`/**/`
    ```html
    <div>
        {// 必须换行，像下面这样}
        {// 换行
        }
    </div>
    ```
2. js注释中，如果存在标签语法，该语法必须合法，因为目前编译器并不会分析js语法。例如下面的注释中，由于`<div>`没有闭合会报错。
需要将标签注释时，推荐使用html注释
    ```jsx
    <div>
        {/*  <div> */} js注释不合法
        <!-- <div> --> html注释合法
    </div>
    ```


[1]: https://github.com/Javey/gulp-vdt
[2]: https://github.com/Javey/vdt-loader
