# v1.2.0

1. add: 支持模板返回`undefined`
2. add: `block`名称支持连字符`-`
3. add: `block`支持`v-if`指令 
4. add: 支持传递上下文`context`给组件
5. add: 组件支持`block`传递代码片段
6. add: 使用`<t:parent>`继承模板时，可以直接书写子元素，该元素会当做`scope.chilren`传给parent
7. add: 支持使用字符串当做`ref`值

4. fix: 修复组件使用`block`一旦渲染，不能被替换掉的问题
5. fix: 修复使用es6`...props`语法，编译报错的问题

# v1.1.0

1. add: 支持渲染svg
2. add: 支持es6对象析构语法`...props`
3. add: 模板继承语法`<t:parent>`支持指令`v-if` `v-for`
4. add: 属性名支持点号`.`
5. add: 当组件存在继承时，可以通过`parent`直接继承父组件的模板，无需显式引入

# v1.0

1. add: 支持`v-raw`指令，用于后端渲染时，输出原始内容
2. add: 支持`v-model`指令，用于表单元素数据双向绑定
3. add: 新增`hydrate`方法，支持前后端同构
4. add: 支持`skipWhitespace`配置，用于去掉空白字符
3. change: 虚拟dom引擎改用`misstime`取代`virtual-dom`，大幅提高性能
