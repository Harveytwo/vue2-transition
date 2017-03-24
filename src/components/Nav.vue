<template>
  <div class="nav">
    <ul>
      <li v-for="item in nav" :class="{'on': item.to==current}">
        <router-link :to="{ name : item.to }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to nav page',
      current: this.$route.name || 'Overview',
      nav: [
        { 'title' : '过渡概述', to : 'Overview' },
        { 'title' : 'css 过渡', to : 'CssTransition' },
        { 'title' : 'js 过渡', to:'JsTransition' },
        { 'title' : '列表过渡', to:'UlTransition' },
        // { 'title' : '过渡状态', to:'/status' }
      ]
    }
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': 'routeChange'
  },
  methods: {
    routeChange () {
      this.current = this.$route.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav ul {
  line-height: .5rem;
  height: .5rem;
}
.nav li {
  display: inline-block;
  margin-right: .15rem;
}
.nav li.on {
  color: #42b983;
}
</style>
