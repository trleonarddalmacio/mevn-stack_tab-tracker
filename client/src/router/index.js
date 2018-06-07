import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/src/components/HelloWorld'
import Register from '@/src/components/Register'
import Login from '@/src/components/Login'
import Songs from '@/src/components/Songs'
import CreateSong from '@/src/components/CreateSong'
import ViewSong from '@/src/components/ViewSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'view-song',
      component: ViewSong
    }
  ]
})
