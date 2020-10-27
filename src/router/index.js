import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagesList',
    component: () => import('../views/Pages.vue'),
  },
  {
    path: '/page/:pageID(\\d+)/',
    name: 'PageEditor',
    component: () => import('../views/PageEditor.vue'),
  },
  {
    path: '/page/:pageID(\\d+)/add/:blockIndex(\\d+)/',
    name: 'AddNewBlock',
    component: () => import('../views/AddNewBlock.vue'),
  },
  {
    // сопоставляется со всем
    path: '*',
    name: 'error404',
    component: Error404,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
