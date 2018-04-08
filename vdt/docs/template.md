Vdt中默认使用一对大括号`{}`作为分隔符，在`{}`中书写合法的js表达式，但这个表达式必须满足以下条件：

* 作为输出时：表达式的值必须是，`Number`, `String`, `null`, `undefined`或模板引用中的一种，或者是由上述类型组成的数组
* 作为属性值时：表达式可以为任意类型，具体取决于属性取值的类型

__为了提高编译速度，Vdt不会分析`{}`中js表达式的合法性，也不会检测变量是否未定义__

以下写法不合法

```html
<div>{ {a: 1, b: 2} }</div>                       // 不合法，Object不能渲染

<div>{ if (true) { 'a' } else { 'b' } }<div>      // 不合法，if语句不是表达式，可以使用三元操作符
```

## 变量

输出一个变量

```html
<div>{name}</div>
<div>{data.name}</div>
<div>{data['name']}</div>
```

## 函数调用

你可以在`{}`中直接调用函数。Vdt中没有过滤器的概念，但可以调用函数来达到类似的目的

```html
<div>{foo(name)}</div>
<div>{arr.join(',')}</div>
```

## if & else & else if 

用于逻辑控制的3条指令是`v-if & v-else-if & v-else`，本质上它们是三元操作符的语法糖，你也直接使用三元操作符

```html
<div v-if={a === 1}>一</div>
<div v-else-if={a === 2}>二</div>

<div v-else>这个数字好诡异</div>
```

或者使用三元操作符

```html
{a === 1 ? <div>一</div> : a === 2 ? <div>二</div> : <div>这个数字好诡异</div>}
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

通过`v-for-key & v-for-value`指令，可以改变键值的命名

* <!-- {.example-template} -->
    ```html
    <ul>
        <li v-for={items} v-for-key="attrName" v-for-value="attrValue">
            {attrName}: {attrValue}
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

`v-if`中能够使用`v-for`提供的两个变量`key & value`，并且与这两条指令的书写顺序无关

* <!-- {.example-template} -->
    ```html
    <ul>
        <li v-for={items} v-if={key === 'width'}>
            只展示key === 'width'的属性
            {key}: {value}
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

## v-raw

`v-raw`指令可以让你指定某个标签下所有子元素不进行编译，而是输出它的原始内容。这可以使
我们很方便地输出分解符`{}`。例如：

* <!-- {.example-template} -->
    ```html
    <script type="text/md" v-raw>
        var vdt = Vdt(template);
        vdt.render({
            test: 1
        });
    </script>
    ```
<!-- {ul:.example} -->

## 宏函数

宏使你能够定义一块可复用的模板片段，Vdt中没有宏的概念，但可以通过函数实现该功能

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

在标签语法的外部，可以书写任意的js代码，Vdt支持在模板顶部定义函数和变量；

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

* 自执行函数的返回值必须合法，返回值会当做结果渲染到页面，可以返回`undefined | null`来阻止渲染。
（没有返回值的函数，默认返回`undefined`）
* 自执行函数不应该改变`this`指向，所以应该通过`.call(this)`的方式调用。ES6可以使用箭头函数`(() => {  })()`，甚至`do {  }`语法

## 继承

继承能够创建可复用的模板，定义页面的骨架，然后被子模板填充，子模板又可以作为父模板被继承。

继承主要通过两个标签语法实现

* `<t:template>` 定义要继承的父模板
* `<b:block>` 在父模板中用来定义可以被填充的区域；在子模板中用来定义将内容填充到父模板的指定区域

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

* 后端渲染时，可以直接在在模板中使用`require()`方法来加载父模板
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

        如果你采用纯前端编译运行，你的模板可以通过`<script>`标签定义在html中，类似这样
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

        由于模板加载的任务在模板外部进行，此时你的子模板无需处理父模板的加载，只需`render`时传入编译后的父模板即可
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
        * 后端编译的情况下，使用`Vdt.middleware`可以很方便地将`Vdt`实时编译成`js`文件
        * 前端编译的情况下，可以使用[gulp-vdt][1]插件将`Vdt`提前编译成`js`文件

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
        // 将模板的依赖交给模板自己处理，js中无需关心 
        define(['/static/template/child'], function(childTemplate) {
            var vdt = Vdt(childTemplate);
            vdt.render();
        });
        ```

    3. 可以借助`webpack`打包工具，将所有依赖整合成单文件。`Vdt`提供了配套工具[vdt-loader][2]来加载`Vdt`模板文件

        `webpack.config.js`配置中添加

        ```js
        module: {
            loaders: [
                test: /\.vdt$/,
                loader: 'vdt-loader'
            ]
        }
        ```

        此时在子模板中，直接加载依赖。

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

        __鉴于ES6和webpack的普及，这种方式是最推荐的做法，所以后面的例子中，我们都会采用这种写法，当然你也可以使用`import`语法加载依赖__

### 继承标签语法

模板加载的问题解决后，我们来看看`Vdt`提供的两个实现继承的标签语法

* `<t:template>` 定义要继承的父模板，其中`template`是父模板名称（非文件名）
* `<b:block>` 定义往父模板哪个区域填充内容，其中`block`为父模板中定义的`block`名称。需要注意以下规则：
    * 如果不存在嵌套，并且该`block`在父模板中找不到对应`block`名，则该`block`将被忽略
        ```jsx
        var layout = require('./layout.vdt');

        <t:layout>
            <b:name>由于父模板不存在名称为name的block，所以该内容会被忽略</b:name>
        </t:layout>
        ```
    * 如果存在嵌套，并且被该`block`嵌套的`block`在父模板中找不到对应`block`名，则该`block`将被忽略
        ```jsx
        var layout = require('./layout.vdt');

        <t:layout>
            <b:name>
                <b:content>
                    虽然父模板中存在content block，但不存在name block，
                    所以该内容会被忽略
                </b:content>
            </b:name>
        </t:layout>
        ```
    * 如果父模板定义的`block`没有被子模板填充，则父模板中的内容将会直接输出
        ```jsx
        var layout = require('./layout.vdt');
        
        // 没有填充父模板的任何block，则父模板中定义的内容都会输出
        <t:layout />
        ```

完整的继承例子渲染结果如下：

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
        <b:name>
            该内容不会输出
        </b:name>
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

### 继承后再继承

模板可以继承后再被继承，继承链可以任意长。例如上面定义的子模板可以当做父模板再被继承

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
        将list内容放在下面
        <t:list />
    </div>
    ```
<!-- {ul:.example.dom} -->

### 传递数据

在使用`<t:template>`时，通过指定属性，可以传递数据给被包含的模板。在父模板中可以通过`scope`对象来获取属性值

* <!-- {.example-template} -->
    ```jsx
    // @file ./list.vdt
    <table>
        <thead>
            <tr><th>ID</th><th>姓名</th></tr>
        </thead>
        <tbody>
            <tr v-for={scope.data}>
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
<!-- {ul:.example.dom} -->

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
        将content模板放在下面，并且扩展它
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

Vdt默认会对任何输出转义

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

### 非转义

当Vdt作为后端模板渲染时，有时需要输出整段html代码，并且不能使用`innerHTML`来输出。例如：在`<header>`
中，输出整段`<style>`代码。此时可以使用`{= variable }`语法来输出整段非转义代码

```html
<html>
<header>
    <title>test</title>
    {= style }
</header>
<body></body>
</html>
```

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

需要注意的是：`// 注释`单行注释需要换行，否则最后的`}`分隔符也会当做注释内容，所以不建议使用，而是使用多行注释`/**/`

```html
<div>
    {// 必须换行，像下面这样}
    {// 换行
    }
</div>
```

[1]: https://github.com/Javey/gulp-vdt
[2]: https://github.com/Javey/vdt-loader
