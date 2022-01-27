import { useUserStore } from './user'

const appStore: any = {}
export const registerStore = () => {
  appStore.useUserStore = useUserStore()
}
export default appStore
