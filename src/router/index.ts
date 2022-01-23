import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('../views/main/Main.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
