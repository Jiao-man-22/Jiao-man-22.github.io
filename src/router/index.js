import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/newpage',
    name:'Newpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsPage.vue')
  },
  //配置路由
  // {
  //   path:'/login',
  //   name:'Login',
  //   component: () => import('../components/Login.vue')
  // },
  //
  {
    path:'/login_1',
    name:'Login_1',
    component: () => import('../components/Login_1.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
