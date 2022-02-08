import { useUserStore } from './user'
const appStore: any = {}
export const registerStore = () => {
  useUserStore().getUserMenus()
  appStore.useUserStore = useUserStore()
}
export default appStore
