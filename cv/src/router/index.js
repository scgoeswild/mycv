import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Curriculum from '@/components/Curriculum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cv',
      name: 'Curriculum',
      component: Curriculum
    }
  ]
})
