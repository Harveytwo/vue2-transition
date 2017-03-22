<template>
  <div class="nav">
    <h1>{{ msg }}</h1>

    <p class="on">以下是关于 JS 过渡的一些 demo</p>

		<button @click="coverShow = !coverShow">js 弹出层</button>

    <h2>单元素/组件的过渡</h2>

    <div class="onlyOne">
			<button @click="show = !show">
		    js 过渡
		  </button>
			
			<transition
		    v-on:before-enter="beforeEnter2"
		    v-on:enter="enter2"
		    v-on:before-leave="beforeLeave2"
		    v-on:leave="leave2"
		    v-bind:css="false"
		  >
		    <div v-if="show" class="radius">
		    	
		    </div>
		  </transition>

		  <transition
		    v-on:before-enter="beforeEnter"
		    v-on:enter="enter"
		    v-on:leave="leave"
		    v-bind:css="false"
		  >
		    <p v-if="show" class="originLeft">
		      Velosity
		    </p>
		  </transition>
		
		<h2>多个元素/组件的过渡</h2>
		<div class="onlyOne more">
			
		</div>

		<!-- 弹出层 -->
		<transition
      v-on:before-enter="coverBeforeEnter"
	    v-on:enter="coverEnter"
	    v-on:leave="coverLeave"
	    v-bind:css="false"
    >
      <div class="cover" v-if="coverShow"></div>
    </transition>
    <transition-group
      v-on:before-enter="contentBeforeEnter"
	    v-on:enter="contentEnter"
	    v-on:leave="contentLeave"
	    v-bind:css="false"
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
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to JsTransition.vue page',
      show: true,
      coverShow: false,
      
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      // el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },
    beforeEnter2: function (el) {
      el.style.opacity = 0
    },
    enter2: function (el, done) {
      Velocity(el, { opacity: 1, width: '.5rem' }, { duration: 600 })
      Velocity(el, { width: '1.5rem', 'border-radius': '10px' }, { complete: done })
    },
    beforeLeave2: function (el) {
      el.style.height = '.5rem'
      el.style.width = '.5rem'
    },
    leave2: function (el, done) {
      Velocity(el, { translateX: '150px', rotateZ: '40deg' }, { duration: 1000 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '150px',
        opacity: 0
      }, { complete: done })
    },
    coverBeforeEnter: function (el) {
    	el.style.opacity = 0
    	el.style.left = '-100%'
    },
    coverEnter: function (el, done) {
    	Velocity(el, {
        left: '0',
        opacity: .5
      }, { complete: done })
    },
    coverLeave: function (el, done) {
    	Velocity(el, {
        left: '100%',
        opacity: 0
      }, { complete: done })
    },
    contentBeforeEnter: function (el) {
    	console.log(el)
    	el.style.opacity = 0
    	el.style.left = '130%'
    },
    contentEnter: function (el, done) {
    	Velocity(el, { opacity: 1}, { duration: 300 })
    	Velocity(el, {
        left: '50%',
      }, { complete: done })
    },
    contentLeave: function (el, done) {
    	Velocity(el, {
        left: '-130%',
        opacity: 0
      }, { complete: done })
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.originLeft {
	transform-origin: left;
}

.radius {
	width: .5rem;
	height: .5rem;
	/*border-radius: 50%;*/
	border: 1px solid red;
	margin-top: .1rem;
}
</style>
