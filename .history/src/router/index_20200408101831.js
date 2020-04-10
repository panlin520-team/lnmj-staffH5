import Vue from 'vue'
import VueRouter from 'vue-router'
import Lojin from '../views/Lojin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Lojin',
    component: Lojin
  },
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
