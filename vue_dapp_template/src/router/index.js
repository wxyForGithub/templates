import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router