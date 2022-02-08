import { RouteRecordRaw } from 'vue-router'

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routesFiles = import.meta.globEager('../router/main/**/*.ts')
  Object.entries(routesFiles).forEach(([k, v]) => {
    allRoutes.push(v.default)
  })

  // 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
