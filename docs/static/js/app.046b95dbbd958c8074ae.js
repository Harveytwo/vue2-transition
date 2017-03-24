webpackJsonp([0,2],[,,function(t,e,n){n(17);var o=n(0)(n(25),n(10),null,null);t.exports=o.exports},function(t,e,n){"use strict";var o=n(1),i=n(24),s=n(7),a=n.n(s),r=n(4),c=n.n(r),l=n(5),v=n.n(l),u=n(8),d=n.n(u);o.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Overview",component:a.a},{path:"/cssTransition",name:"CssTransition",component:c.a},{path:"/jstranstion",name:"JsTransition",component:v.a},{path:"/ultranstion",name:"UlTransition",component:d.a}]})},function(t,e,n){n(19),n(18);var o=n(0)(n(26),n(11),"data-v-5cd2acbf",null);t.exports=o.exports},function(t,e,n){n(21);var o=n(0)(n(27),n(13),"data-v-754516c7",null);t.exports=o.exports},function(t,e,n){n(16);var o=n(0)(n(28),n(9),"data-v-1163b36a",null);t.exports=o.exports},function(t,e,n){n(20);var o=n(0)(n(29),n(12),"data-v-706fffc2",null);t.exports=o.exports},function(t,e,n){n(22);var o=n(0)(n(30),n(14),"data-v-9cec90d6",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("ul",t._l(t.nav,function(e){return n("li",{class:{on:e.to==t.current}},[n("router-link",{attrs:{to:{name:e.to}}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-nav"),t._v(" "),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("p",{staticClass:"on"},[t._v("以下是关于 CSS 过渡的一些 demo")]),t._v(" "),n("button",{on:{click:function(e){t.coverShow=!t.coverShow}}},[t._v("css 弹出层")]),t._v(" "),n("h2",[t._v("单元素/组件的过渡")]),t._v(" "),n("div",{staticClass:"onlyOne"},[n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("\n      Css3 的转换和过渡\n    ")]),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("滑动淡入 / 滑动淡出")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("淡入 / 淡出")])]),t._v(" "),n("transition",{attrs:{name:"rotate-fade"}},[t.show?n("p",[t._v("旋转淡入 / 旋转淡出")]):t._e()]),t._v(" "),n("button",{on:{click:function(e){t.show2=!t.show2}}},[t._v("\n      Css3 的动画 + Animate.css\n    ")]),t._v(" "),n("transition",{attrs:{name:"radius"}},[t.show2?n("div",{staticClass:"radius"}):t._e()]),t._v(" "),n("transition",{attrs:{name:"bounce"}},[t.show2?n("p",[t._v("Animation~~Scale")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[t.show2?n("p",[t._v("自定义类名，使用 Animate.css ")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[t.show2?n("p",[t._v("flipInX")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[t.show2?n("p",[t._v("bounceDownIn")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown","leave-active-class":"animated hinge"}},[t.show2?n("p",[t._v("hinge")]):t._e()])],1),t._v(" "),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[t.coverShow?n("div",{staticClass:"cover"}):t._e()]),t._v(" "),n("transition-group",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutDown",tag:"div"}},[t.coverShow?n("div",{key:"coverWrap",staticClass:"coverWrap"},[n("div",{key:"title",staticClass:"title"},[t._v("title")]),t._v(" "),n("p",{key:"content",staticClass:"content"},[t._v("content")]),t._v(" "),n("p",{key:"btns",staticClass:"btns"},[n("button",{key:"btn",on:{click:function(e){t.coverShow=!t.coverShow}}},[t._v("ok")])])]):t._e()]),t._v(" "),n("h2",[t._v("多个元素/组件的过渡")]),t._v(" "),n("div",{staticClass:"onlyOne more"},[n("h3",[t._v("过渡模式")]),t._v(" "),n("p",[t._v("1、transition 的默认行为 - 进入和离开同时发生。")]),t._v(" "),n("transition",{attrs:{name:"switch-fade"}},[n("button",{key:t.isEditing,staticClass:"switch",on:{click:function(e){t.isEditing=!t.isEditing}}},[t._v("\n        "+t._s(t.isEditing?"on":"off")+"\n      ")])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[t._v("2、in-out 新元素先进行过渡，完成之后当前元素过渡离开。")]),t._v(" "),n("transition",{attrs:{name:"switch-fade",mode:"in-out"}},[n("button",{key:t.isEditing,staticClass:"switch",on:{click:function(e){t.isEditing=!t.isEditing}}},[t._v("\n        "+t._s(t.isEditing?"on":"off")+"\n      ")])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[t._v("3、out-in 当前元素先进行过渡，完成之后新元素过渡进入。")]),t._v(" "),n("transition",{attrs:{name:"switch-fade",mode:"out-in"}},[n("button",{key:t.isEditing,staticClass:"switch",on:{click:function(e){t.isEditing=!t.isEditing}}},[t._v("\n        "+t._s(t.isEditing?"on":"off")+"\n      ")])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overview"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("p",[t._v("Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。")]),t._v(" "),n("h3",[t._v("可以使用以下工具：")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("1、在 CSS 过渡和动画中自动应用 class")]),t._v(" "),n("li",[t._v("2、可以配合使用第三方 CSS 动画库，如 Animate.css")]),t._v(" "),n("li",[t._v("3、在过渡钩子函数中使用 JavaScript 直接操作 DOM")]),t._v(" "),n("li",[t._v("4、可以配合使用第三方 JavaScript 动画库，如 Velocity.js")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("p",{staticClass:"on"},[t._v("以下是关于 JS 过渡的一些 demo")]),t._v(" "),n("button",{on:{click:function(e){t.coverShow=!t.coverShow}}},[t._v("js 弹出层")]),t._v(" "),n("h2",[t._v("单元素/组件的过渡")]),t._v(" "),n("div",{staticClass:"onlyOne"},[n("button",{on:{click:function(e){t.show=!t.show}}},[t._v("\n\t\t    js 过渡\n\t\t  ")]),t._v(" "),n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter2,enter:t.enter2,"before-leave":t.beforeLeave2,leave:t.leave2}},[t.show?n("div",{staticClass:"radius"}):t._e()]),t._v(" "),n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[t.show?n("p",{staticClass:"originLeft"},[t._v("\n\t\t      Velosity\n\t\t    ")]):t._e()]),t._v(" "),n("h2",[t._v("多个元素/组件的过渡")]),t._v(" "),n("div",{staticClass:"onlyOne more"}),t._v(" "),n("transition",{attrs:{css:!1},on:{"before-enter":t.coverBeforeEnter,enter:t.coverEnter,leave:t.coverLeave}},[t.coverShow?n("div",{staticClass:"cover"}):t._e()]),t._v(" "),n("transition-group",{attrs:{css:!1,tag:"div"},on:{"before-enter":t.contentBeforeEnter,enter:t.contentEnter,leave:t.contentLeave}},[t.coverShow?n("div",{key:"coverWrap",staticClass:"coverWrap"},[n("div",{key:"title",staticClass:"title"},[t._v("title")]),t._v(" "),n("p",{key:"content",staticClass:"content"},[t._v("content")]),t._v(" "),n("p",{key:"btns",staticClass:"btns"},[n("button",{key:"btn",on:{click:function(e){t.coverShow=!t.coverShow}}},[t._v("ok")])])]):t._e()])],1),t._v(" "),n("my-special-transition",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("p",[t._v("可复用的过渡")])]),t._v(" "),t.show?n("my-transition",[n("p",[t._v("我不造啊啊")])]):t._e(),t._v(" "),n("div",{directives:[{name:"demo",rawName:"v-demo",value:{color:"white",text:"hello!"},expression:"{ color: 'white', text: 'hello!' }"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ulTransition"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("列表的过渡")]),t._v(" "),n("div",{staticClass:"onlyOne"},[n("button",{on:{click:t.add}},[t._v("Add")]),t._v(" "),n("button",{on:{click:t.remove}},[t._v("Remove")]),t._v(" "),n("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.items,function(e){return n("span",{key:e,staticClass:"list-item"},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),n("button",{on:{click:t.shuffle}},[t._v("Shuffle")]),t._v(" "),n("transition-group",{attrs:{name:"flip-list",tag:"ul"}},t._l(t.items,function(e){return n("li",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])}))],1)])},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n.n(o);e.default={name:"app",components:{"top-nav":i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to the CssTransition.vue page",show:!0,show2:!0,coverShow:!1,isEditing:!0}},methods:{randomIndex:function(){return Math.floor(Math.random()*this.items.length)},add:function(){this.items.splice(this.randomIndex(),0,this.nextNum++)},remove:function(){this.items.splice(this.randomIndex(),1)},shuffle:function(){this.items=_.shuffle(this.items)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);o.a.directive("demo",function(t,e){console.log(e.value.color),console.log(e.value.text)}),o.a.component("my-special-transition",{template:'    <transition      name="very-special-transition"      mode="out-in"      v-on:before-enter="beforeEnter"      v-on:enter="enter"      v-on:leave="leave"    >      <slot></slot>    </transition>  ',methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){Velocity(t,{opacity:1,scale:"1.3"},{duration:300}),Velocity(t,{scale:"1"},{complete:e})},leave:function(t,e){Velocity(t,{scale:"1.5"},{duration:800}),Velocity(t,{scale:".2",opacity:0},{complete:e})}}}),o.a.component("my-transition",{functional:!0,render:function(t,e){return t("transition",{props:{name:"very-special-transition",mode:"out-in"},on:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){Velocity(t,{opacity:1,transformPosition:"20% 40%",scale:"1.3"},{duration:300}),Velocity(t,{scale:"1"},{complete:e})},leave:function(t,e){Velocity(t,{translateX:"82px"},{duration:800}),Velocity(t,{rotateZ:"30deg"},{loop:2}),Velocity(t,{scale:".2",opacity:0},{complete:e})}}},e.children)}}),e.default={name:"hello",data:function(){return{msg:"Welcome to JsTransition.vue page",show:!0,coverShow:!1}},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){Velocity(t,{opacity:1,fontSize:"1.4em"},{duration:300}),Velocity(t,{fontSize:"1em"},{complete:e})},leave:function(t,e){Velocity(t,{translateX:"15px",rotateZ:"50deg"},{duration:600}),Velocity(t,{rotateZ:"100deg"},{loop:2}),Velocity(t,{rotateZ:"45deg",translateY:"30px",translateX:"30px",opacity:0},{complete:e})},beforeEnter2:function(t){t.style.opacity=0},enter2:function(t,e){Velocity(t,{opacity:1,width:".5rem"},{duration:600}),Velocity(t,{width:"1.5rem","border-radius":"10px"},{complete:e})},beforeLeave2:function(t){t.style.height=".5rem",t.style.width=".5rem"},leave2:function(t,e){Velocity(t,{translateX:"150px",rotateZ:"40deg"},{duration:1e3}),Velocity(t,{rotateZ:"100deg"},{loop:2}),Velocity(t,{rotateZ:"45deg",translateY:"30px",translateX:"150px",opacity:0},{complete:e})},coverBeforeEnter:function(t){t.style.opacity=0,t.style.left="-100%"},coverEnter:function(t,e){Velocity(t,{left:"0",opacity:.5},{complete:e})},coverLeave:function(t,e){Velocity(t,{left:"100%",opacity:0},{complete:e})},contentBeforeEnter:function(t){console.log(t),t.style.opacity=0,t.style.left="130%"},contentEnter:function(t,e){Velocity(t,{opacity:1},{duration:300}),Velocity(t,{left:"50%"},{complete:e})},contentLeave:function(t,e){Velocity(t,{left:"-130%",opacity:0},{complete:e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to nav page",current:this.$route.name||"Overview",nav:[{title:"过渡概述",to:"Overview"},{title:"css 过渡",to:"CssTransition"},{title:"js 过渡",to:"JsTransition"},{title:"列表过渡",to:"UlTransition"}]}},watch:{$route:"routeChange"},methods:{routeChange:function(){this.current=this.$route.name}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"overview",data:function(){return{msg:"Welcome to the Overview.vue page"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ulTransition",data:function(){return{msg:"Welcome to UlTransition.vue page",items:[1,2,3,4,5,6,7,8,9],nextNum:10}},methods:{randomIndex:function(){return Math.floor(Math.random()*this.items.length)},add:function(){this.items.splice(this.randomIndex(),0,this.nextNum++)},remove:function(){this.items.splice(this.randomIndex(),1)},shuffle:function(){this.items=_.shuffle(this.items)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(2),s=n.n(i),a=n(3);o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})}],[31]);
//# sourceMappingURL=app.046b95dbbd958c8074ae.js.map