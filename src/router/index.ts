import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/Main.vue')
    // children: [] 根据userMenus决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('userToken')
    if (!token) {
      return '/login'
    }
  }

  // console.log(router.getRoutes())
})

export default router
