import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/src/components/HelloWorld'
import Register from '@/src/components/Register'
import Login from '@/src/components/Login'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
