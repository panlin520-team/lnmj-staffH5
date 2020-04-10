import Vue from 'vue'
import VueRouter from 'vue-router'
import Lojin from '../views/Lojin.vue'

Vue.use(VueRouter)

const routes = [
  //首页登录
  {
    path: '/',
    name: 'Lojin',
    component: Lojin
  },
  //首页登录
  {
    path: '/Lojin',
    name: 'Lojin',
    component: Lojin
  },
  //用户注册
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  //用户忘记密码
  {
    path: '/forgetpassword',
    name: 'Forgetpassword',
    component: () => import('../views/Forgetpassword.vue')
  },
  //登录首页
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
  //业绩
  {
    path: '/performance',
    name: 'Performance',
    component: () => import('../views/Performance.vue')
  },
  //组员
  {
    path: '/crew',
    name: 'Crew',
    component: () => import('../views/Crew.vue')
  },
  //工资
  {
    path: '/salary',
    name: 'Salary',
    component: () => import('../views/Salary.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
