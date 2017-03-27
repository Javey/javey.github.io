## 事件绑定

通过`ev-*`属性，可以往dom上绑定事件

例如：

* <!-- {.example-template} -->
    ```jsx
    <button ev-click={function() { alert('点击了按钮') }}>点击按钮</button>
    ```
<!-- {ul:.example.dom} -->

## 绑定方法

大多数情况下，事件处理函数都比较复杂，直接写在模板中不太优雅。
一般通过将事件处理传入模板的`render`方法，来进行绑定

例如：

* <!-- {.example-template} -->
    ```jsx
    <button ev-click={onClick.bind(this)}>点击了{count}次</button>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        count: 0,
        onClick: function() {
            this.data.count++;
            // 调用update方法去更新dom
            this.update();
        }
    })
    ```
<!-- {ul:.example.dom} -->

__如果事件处理函数中需要引用`this`，则绑定方法时记得手动`bind(this)`__

## 传入参数 

你可以通过`bind()`方法，往事件处理函数中传入参数

* <!-- {.example-template} -->
    ```jsx
    <div>
        点击下面的名字
        <ul>
            <li v-for={users} 
                ev-click={onClick.bind(this, value)}
            >{value}</li>
        </ul>
    </div>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        users: ['Syalvia', 'Shadow', 'Javey'],
        onClick: function(user) {
            alert('你点击的是' + user);
        }
    })
    ```
<!-- {ul:.example.dom} -->

## 事件对象

事件处理函数的最后一个参数为事件对象，通过它我们可以访问事件的属性和方法 

* <!-- {.example-template} -->
    ```jsx
    <div ev-click={onClickParent.bind(this)}>
        点击父元素
        <p ev-click={onClickChild.bind(this)}>点击子元素</p>
    </div>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        onClickParent: function(event) {
            alert('你点击的是父元素，target: ' + event.target.tagName);
        },
        onClickChild: function(event) {
            alert('你点击的是子元素，target: ' + event.target.tagName);
        }
    })
    ```
<!-- {ul:.example.dom.event-object} -->

### 事件冒泡

浏览器中事件会默认冒泡，我们可以通过`event.stopPropagation()`来阻止冒泡，

但是Vdt中，事件默认是阻止冒泡的，我们需要通过`event.startPropagation()`来进行冒泡

上面的例子中，我们点击子元素，并不会触发父元素的点击事件，如果需要我们像下面这么做

* <!-- {.example-template} -->
    ```jsx
    <div ev-click={onClickParent.bind(this)}>
        点击父元素
        <p ev-click={onClickChild.bind(this)}>点击子元素</p>
    </div>
    ```
* <!-- {.example-js} -->
    ```js
    var vdt = Vdt(template);
    vdt.render({
        onClickParent: function(event) {
            alert('你点击的是父元素，target: ' + event.target.tagName);
        },
        onClickChild: function(event) {
            // 让事件冒泡
            event.startPropagation();
            alert('你点击的是子元素，target: ' + event.target.tagName);
        }
    })
    ```
<!-- {ul:.example.dom.event-object} -->

