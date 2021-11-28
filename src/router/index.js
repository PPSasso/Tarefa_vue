import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Action from '../views/Action.vue'
import Horror from '../views/Horror.vue'
import Kids from '../views/Kids.vue'
import Comedy from '../views/Comedy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/horror',
    name: 'Horror',
    component: Horror
  },
  {
    path: '/kids',
    name: 'Kids',
    component: Kids
  },
  {
    path: '/comedy',
    name: 'Comedy',
    component: Comedy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
