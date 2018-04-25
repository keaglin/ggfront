import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/components/GameList'
import GameDetail from '@/components/GameDetail'
import Login from '@/components/Login'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameList',
      component: GameList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/game/:title',
      name: 'GameDetail',
      props: true,
      component: GameDetail
    },
    // {
    //   path: '/posts',
    //   name: 'GameDetail',
    //   props: true,
    //   component: GameDetail
    // }
  ]
})
