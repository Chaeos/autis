import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: '/start'
  },
  {
      path: '/start',
      component: () => import('@/views/StartPage.vue')
  },
  {
      path: '/home',
      component: () => import('@/views/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
