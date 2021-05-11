import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
    beforeEnter: function(to, from, next) {
        const token = localStorage.getItem('user-token');

        if(token) {
            next('/module/preparatory');
        } else {
            next();
        }
    }
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
    path:'/fale-conosco',
    name:'Contact',
    component:() => import('../views/Contact.vue')
  },
  {
    path:'/module',
    name:'Module',
    component:() => import('../views/Modules/Module.vue'),
    beforeEnter: function(to, from, next) {
        const token = localStorage.getItem('user-token');

        if(!token) {
            next('/login');
        } else {
            next();
        }
    },
    children: [
        
        {
            path:'preparatory', 
            name:'Preparatory', 
            component:() => import('../views/Modules/Preparatory.vue'),
        },
        {
            path:':slug',
            name:'ModuleIndex',
            component:() => import('../views/Modules/ModuleIndex.vue'),
            props:true
        },
        {
            path:':id/questions',
            name:'ModuleQuestions',
            component:() => import('../views/Modules/ModuleQuestions.vue'),
            props:true
        }
    ]
  },
  {
    path:'/class/:id',
    props:true,
    component:() =>import('../views/Modules/Class.vue')
  },
  {
    path:'/logout',
    name:'Logout',
    beforeEnter: function(to, from, next) {
        const token = localStorage.getItem('user-token');

        if(!token) {
            next('/login');
        } else {
            next();
        }
    },
    component:() => import('../views/Logout.vue')
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
