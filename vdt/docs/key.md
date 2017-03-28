每个元素都有一个`key`属性，如果你指定了它，则它必须在兄弟元素之间唯一。

`key`属性用于标识每一个兄弟元素，它能提高更新模板时diff算法的效率

先来看一个问题：如何将数组`[1, 2, 3]`变成`[1, 3]`？

有两种方法：

1. 最直接的方法就是：直接删除第2个元素
2. 也可以这样：将第2个元素替换成3，变成`[1, 3, 3]`，然后删除第3个元素

很显然第二种方法比较绕，但不需要`key`属性来标识元素，`Virtual-Dom`做diff更新时，就是采用
的该方法。而加入`key`则会采用第一种方法来更新，所以`key`属性的加入能提高模板更新性能。

Vdt作为基于`Virtual-Dom`的模板，能够快速diff更新，但这建立在dom结构不被破坏的前提下。
如果你修改Vdt渲染出来的dom，则有可能造成更新失败，或者出现诡异的问题。

有时候，`key`属性能让你在即使破坏了dom结构的情况下进行更新

__Vdt diff是从前到后对比的，如果你要操作dom，只能是往节点后面追加节点(append)，否则都不能更新__

例如：

* <!-- {.example-template} -->
    ```jsx
    <ul>
        <li v-for={users} class="no-key-test">{value}</li>
    </ul>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        users: ['Syalvia', 'Shadow', 'Javey']
    })
    ```
<!-- {ul:.example.dom} -->

然后我们第2个`li:Shadow`上，追加一个文本节点

```js
var textNode = document.createTextNode(' text');
document.querySelectorAll('.no-key-test')[1].appendChild(textNode);
```
<!-- {.run} -->

然后我们删除第2个`li:Shadow`，更新模板

```js
vdt.data.users.splice(1, 1);
vdt.update();
```
<!-- {.run} -->

你会发现，我们的目的是删除第二个`li`，但是由于我们操作了它的`appendChild`，这个文本节点
不能被diff到，由于没有`key`属性，所以采用的上面讨论的第二种方法来进行更新，而这个操作
仅仅只是将Shadow替换成了Javey，然后删除`li:Javey`，我们追加的文本节点保留了。

如果我们想要Vdt删除`li:Shadow`，只需要给每个元素一个唯一的`key`即可

* <!-- {.example-template} -->
    ```jsx
    <ul>
        <li v-for={users} key={value} class="key-test">{value}</li>
    </ul>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    var dom = vdt.render({
        users: ['Syalvia', 'Shadow', 'Javey']
    });

    // 插入文本节点
    var textNode = document.createTextNode(' text');
    dom.querySelectorAll('.key-test')[1].appendChild(textNode);
    ```
<!-- {ul:.example.dom} -->

我们将`value`作为`key`传给`li`，所以这里必须保证所有的`users`都不重名

然后删除第2个元素`li:Shadow`，更新模板

```js
vdt.data.users.splice(1, 1);
vdt.update();
```
<!-- {.run} -->

这次整个`li:Shadow`被删掉了，而不是进行部分替换
