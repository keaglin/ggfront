import Vue from 'vue'
import Router from 'vue-router'
import GameContainer from '@/components/GameContainer'
import GameList from '@/components/GameList'
import GameDetail from '@/components/GameDetail'
import Login from '@/components/Login'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameContainer',
      component: GameContainer
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/games/:title',
      name: 'GameDetail',
      props: true,
      component: GameDetail
    },
    {
      path: '/games',
      name: 'GameList',
      props: true,
      component: GameDetail
    },
  ]
})
