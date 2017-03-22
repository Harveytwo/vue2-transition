<template>
  <div id="app">
    <top-nav></top-nav>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
      <!-- <component v-bind:is="view"></component> -->
    </transition>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    'top-nav': Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin: 0 auto;
  padding: 0 .24rem;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-active {
  opacity: 0;
}
h1 {
  font-size: .2rem;
  margin: .1rem 0;
}
h2 {
  font-size: .18rem;
  margin: .1rem 0;
}
h3 {
  margin-top: .15rem;
  font-size: .15rem;
}
p {
  line-height: .28rem;
}
</style>
