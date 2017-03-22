<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p class="on">以下是关于 CSS 过渡的一些 demo</p>

    <button @click="coverShow = !coverShow">css 弹出层</button>
    
    <!-- 使用 vue 的过渡时，不能 class 名，不能是 transition -->
    <h2>单元素/组件的过渡</h2>
    <div class="onlyOne">
      <button v-on:click="show = !show">
        Css3 的转换和过渡
      </button>

      <transition name="slide-fade">
        <p v-show="show">滑动淡入 / 滑动淡出</p>
      </transition>

      <transition name="fade">
        <p v-show="show">淡入 / 淡出</p>
      </transition>

      <transition name="rotate-fade">
        <p v-if="show">旋转淡入 / 旋转淡出</p>
      </transition>
      
      <button v-on:click="show2 = !show2">
        Css3 的动画 + Animate.css
      </button>

      <transition name="radius">
        <div v-if="show2" class="radius"></div>
      </transition>

      <transition name="bounce">
        <p v-if="show2">Animation~~Scale</p>
      </transition>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="show2">自定义类名，使用 Animate.css </p>
      </transition>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
      >
        <p v-if="show2">flipInX</p>
      </transition>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInDown"
        leave-active-class="animated bounceOutUp"
      >
        <p v-if="show2">bounceDownIn</p>
      </transition>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated hinge"
      >
        <p v-if="show2">hinge</p>
      </transition>
    </div>
    <!-- 弹出层 -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutDown"
    >
      <div class="cover" v-if="coverShow"></div>
    </transition>
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutDown"
      tag="div"
    >
      <div v-if="coverShow" key="coverWrap" class="coverWrap">
        <div class="title" key="title">title</div>
        <p class="content" key="content">content</p>
        <p class="btns" key="btns">
          <button key="btn" @click="coverShow = !coverShow">ok</button>
        </p>
      </div>
    </transition-group>
    
    <h2>多个元素/组件的过渡</h2>
    <div class="onlyOne more">
      <h3>过渡模式</h3>
      <p>1、transition 的默认行为 - 进入和离开同时发生。</p>
      <transition name='switch-fade'>
        <button v-bind:key="isEditing" @click="isEditing = !isEditing" class="switch">
          {{ isEditing ? 'on' : 'off' }}
        </button>
      </transition>
      <br />
      <br />
      <p>2、in-out 新元素先进行过渡，完成之后当前元素过渡离开。</p>
      <transition name='switch-fade' mode="in-out">
        <button v-bind:key="isEditing" @click="isEditing = !isEditing" class="switch">
          {{ isEditing ? 'on' : 'off' }}
        </button>
      </transition>
      <br />
      <br />
      <p>3、out-in 当前元素先进行过渡，完成之后新元素过渡进入。</p>
      <transition name='switch-fade' mode="out-in">
        <button v-bind:key="isEditing" @click="isEditing = !isEditing" class="switch">
          {{ isEditing ? 'on' : 'off' }}
        </button>
      </transition>



    </div>
    <div class="onlyOne more">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>

      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">
          {{ item }}
        </li>
      </transition-group>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to the CssTransition.vue page',
      show: true,
      show2: true,
      coverShow: false,
      isEditing: true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

/* CSS3 的转换和过渡 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(24px);
  opacity: 0;
}

.rotate-fade-enter-active {
  transition: all .3s ease;
}
.rotate-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.rotate-fade-enter, .rotate-fade-leave-active {
  transform: translateX(-240px) rotateZ(60deg);
  opacity: 0;
}

/* CSS3 的动画 */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}


.radius {
  width: .5rem;
  height: .5rem;
  border: 1px solid red;
  position: relative;
  margin-top: .1rem;
}
.radius-enter-active {
  animation: radius-in 1.5s;
}
.radius-leave-active {
  animation: radius-out 1.5s;
}
@keyframes radius-in {
  0% {
    opacity: 0;
    left: 55px;
    transform: rotateZ(360deg);
  }
  
  100% {
    opacity: 1;
    left: 0;
    transform: rotateZ(0);
  }
}
@keyframes radius-out {
  0% {
    opacity: 1;
    left: 0;
    transform: rotateZ(0);
  }
  100% {
    opacity: 0;
    left: 55px;
    transform: rotateZ(360deg);
  }
}

/* 多个元素的过渡 */
.switch {
  position: absolute;
}
.switch-fade-enter-active, .switch-fade-leave-active {
  transition: all 1s
}
.switch-fade-enter {
  opacity: 0;
  transform: translateX(25px);
}
.switch-fade-leave-active {
  opacity: 0;
  transform: translateX(-25px);
}

/* 列表过渡 */
.list-item {
  display: inline-block;
  margin-right: 10px;
  transition: all 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}

.flip-list-move {
  transition: transform 1s;
}
</style>

<style type="text/css">
  .on {
    color: #42b983;
  }
  .onlyOne {
    padding-left: .24rem;
  }
  .more {
    margin-top: .5rem;
  }
  button {
    border-radius: 4px;
    display: block;
    /*border: 1px solid;*/
    padding: .05rem;
    margin-top: .1rem;
  }

  /* 弹出层样式 */
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
}
.coverWrap {
  background: #fff;
  width: 1.5rem;
  height: 1rem;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -.75rem;
  margin-top: -.5rem;
}
.coverWrap button {
  border: 0;
  display: inline-block;
  background: #fff;
  color: #15a5ec;
  position: absolute;
  right: .1rem;
  bottom: .05rem;
}
.coverWrap > div {
  padding-top: .2rem;
}
</style>