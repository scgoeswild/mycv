import Vue from 'vue'
import Router from 'vue-router'
import Simone from '@/components/Simone'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Simone',
      component: Simone,

    }
  ]

})
