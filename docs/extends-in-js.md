面向对象程序设计中有条设计原则：组合优于继承。说的是尽量使用组合而不是继承的思路来解决问题。
的确，在前端开发中，我们大部分情况都可以使用组合来实现。但这并不意味着，组合适用于所有的情况。
在有些情况下，使用继承而非组合，可以是问题大大简化。而这种情况最常见的便是页面组件。

在单页面应用中，每个页面之间都存在相似性。比如：它们之间有相同的头部和尾部，并且具有相同的逻辑，
我们可能需要为每个页面请求用户数据，然后请求页面单独的数据，最后渲染页面。继承相比于组合最大的
优势便是，继承是白盒复用，你可以清楚了解父类的实现细节，然后方便地扩展它们。这一点对于页面组件
来说是莫大的优势，因为页面组件不是可复用的组件，它需要了解每个细节来实现自有的特有逻辑。

实际应用中，往往是组合和继承一起使用，仅仅使用某一种方法，只会让你的思维模式走向极端。就像在
汽车制造过程中，开始都是使用轮子，发动机等等零件组合成一辆汽车，但当这种组合方式达到一定规模后，
便形成了平台，此时你再生产另一种型号的汽车，你无需再从零开始重新进行复杂的组合，如果将之前积累
的经验形成一套标准，我们便可以在此基础上改变或扩展局部就可以生产出另一种车型了。

所以在前端开发中，我们首先可以通过组合搭建出所有页面通用的骨架，其它页面继承它后仅仅只需要关心
自己的特有逻辑即可。

Intact是一个既支持组合又支持继承的开发框架，它在建立在js和css语言原生支持继承的基础上，扩展了
html模板语法，让模板也支持继承。

# 提取父类


