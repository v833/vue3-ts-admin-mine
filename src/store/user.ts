import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { IAccount } from '@/service/login/type'
import LocalCache from '@/utils/cache'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  // state
  const token = ref('')
  const userInfo = ref({})
  const userMenus = ref({})
  // actions
  const accountLoginAction = async (payload: IAccount) => {
    // 实现登录逻辑
    const loginResult = await accountLoginRequest(payload)
    const { id } = loginResult
    token.value = loginResult.token
    LocalCache.setCache('token', token.value)

    // 请求用户信息
    userInfo.value = await requestUserInfoById(id)
    LocalCache.setCache('userInfo', userInfo.value)

    // 请求用户菜单
    userMenus.value = await requestUserMenusByRoleId(id)
    LocalCache.setCache('userMenus', userMenus.value)
  }

  return { accountLoginAction }
})
