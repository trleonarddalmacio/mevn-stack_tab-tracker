import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/src/components/HelloWorld'
import Register from '@/src/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
