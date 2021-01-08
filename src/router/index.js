import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Contact from '../pages/Contact'

Vue.use(VueRouter)

// Defining app routes.
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/contact-us',
    name: 'ContactPage',
    component: Contact,
  },
]

// Initializing router with available routes.
const router = new VueRouter({
  mode: 'history',
  routes,
})

// Exporting prepared router.
export default router
