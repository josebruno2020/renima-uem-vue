import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
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
    path:'/register',
    name:'Register',
    component:() => import('../views/Register.vue')
  },
  {
    path:'/termos',
    name:'Termos',
    component:() => import('../views/Termos.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue')
  },
  {
    path:'*',
    name:'NotFound',
    component:() => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
