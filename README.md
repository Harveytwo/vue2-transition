# vue-transition

> A Vue.js project

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
包括以下工具：
> 1、在 CSS 过渡和动画中自动应用 class
> 
> 2、可以配合使用第三方 CSS 动画库，如 Animate.css
> 
> 3、在过渡钩子函数中使用 JavaScript 直接操作 DOM
> 
> 4、可以配合使用第三方 JavaScript 动画库，如 Velocity.js


## 过渡的-CSS-类名

会有 4 个(CSS)类名在 enter/leave 的过渡中切换

> 1、v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
> 
> 2、v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。
> 
> 3、v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
> 
> 4、v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。

更多详情参考 vue 官网教程：https://cn.vuejs.org/v2/guide/transitions.html

可以参考该图片详细理解这 4 个过程
<img src="static/img/transition.png">

### vue 2.0 的一些 demo

在线地址：
https://harveytwo.github.io/vue2-transition/#/ 



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
