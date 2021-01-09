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
  scrollBehavior() {
    setTimeout(() => {
      return { x: 0, y: 0 }
    }, 275) // 275 ms is time used for page change animation
  },
  routes,
})

// Exporting prepared router.
export default router
