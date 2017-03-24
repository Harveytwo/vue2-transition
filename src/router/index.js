import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import CssTransition from '@/components/CssTransition'
import JsTransition from '@/components/JsTransition'
import UlTransition from '@/components/UlTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },{
      path: '/cssTransition',
      name: 'CssTransition',
      component: CssTransition
    },{
      path: '/jstranstion',
      name: 'JsTransition',
      component: JsTransition
    },{
      path: '/ultranstion',
      name: 'UlTransition',
      component: UlTransition
    },
  ]
})
