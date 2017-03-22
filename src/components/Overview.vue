<template>
  <div class="overview">
    <h1>{{ msg }}</h1>

    <p>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。</p>

    <h3>可以使用以下工具：</h3>
    <ul>
      <li>1、在 CSS 过渡和动画中自动应用 class</li>
      <li>2、可以配合使用第三方 CSS 动画库，如 Animate.css</li>
      <li>3、在过渡钩子函数中使用 JavaScript 直接操作 DOM</li>
      <li>4、可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      msg: 'Welcome to the Overview.vue page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overview ul {
  padding-left: .25rem;
}
</style>
