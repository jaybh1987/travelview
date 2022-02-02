import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/welcome.vue'
import Addtrip from '../views/addtrip.vue'
import Viewpage from '../views/viewpage.vue'

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
    path: '/welcome', 
    name: 'Welcome', 
    component: Welcome
  }, 
  {
    path: '/addtrip', 
    name: 'Addtrip', 
    component: Addtrip
  }, 
  {
    path: '/view', 
    name: 'View', 
    component: Viewpage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
