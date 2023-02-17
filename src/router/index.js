import { createRouter, createWebHashHistory } from 'vue-router'
import apiKey from '../modules/config'

const routes = []

const requestOptions = {
  method: "GET",
  withCredentials: true,
  headers: {
    //"Content-Type": "application/json",
    "x-api-key": apiKey,
    "x-token": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMzE5OCJ9LCJpYXQiOjE2NzQ1MzE0NTIsImV4cCI6MTY3NDYxNzg1Mn0.r9dKcG-nNc4phfYQlRpnwChmazxcsIegAeAnX6tFDJ4'
  },
  body: null,
};

let response = await fetch(
  "https://pps-stie-nobel.org/api/nobel_mm_uji_hasil/all",
  requestOptions
)
.then(response => response.json())
  .then(data => {

    routes.push({
      path: '/',
      name: 'Home',
     component: () => import('../views/Home.vue'),
    }),

    routes.push({
      path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),  
    }),


    routes.push({
      path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),  
    }),

    routes.push({
      path: '/AddOutcome',
        name: 'AddOutcome',
        component: () => import('../views/AddOutcome.vue'),  
    }),

    data.data.nobel_mm_uji_hasil.forEach((item, index) => {
      
          routes.push({
            path: item.path,
            name: "AAA",
            //component: require(`./views/${item.component}.vue`),
            component: () => import(`../views/${item.component}.vue`),
          })
      })
  })



// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('../views/Home.vue'),
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('../views/Login.vue'),  
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: () => import('../views/Register.vue'),
//   },
//   {
//     path: '/add-income',
//     name: 'AddIncome',
//     component: () => import('../views/AddIncome.vue'),
//   },
//   {
//     path: '/add-outcome',
//     name: 'AddOutcome',
//     component: () => import('../views/AddOutcome.vue'),
//   },
//   {
//     path: '/menu/:id',
//     name: 'menu',
//     component: () => import('../views/AddOutcome.vue')
//   }
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
  if (to.name !== 'Login' && to.name !== 'Register' && !isAuthenticated) {
    next('/login')
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
export default router
