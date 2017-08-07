Vdt模板提供的`v-model`指令，可以实现数据的双向绑定。本质上它是如下语法的语法糖，
只不过针对不同的表单控件，做了特殊处理。

```html
<input v-model="value" />

=>

<input 
    ev-input={function(e) { self.set('value', e.target.value); }}
    value={self.get('value')}
>
```

# 基础用法

## 文本框

```html
<div>
    <input v-model="text" />
    <p>你的输入是：{self.get('text')}</p>
</div>
```
<!-- {.example.auto} -->
