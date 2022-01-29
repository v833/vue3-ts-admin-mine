import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { IAccount } from '@/service/login/type'
import LocalCache from '@/utils/cache'
import { ref } from 'vue'
import router from '@/router'
export const useUserStore = defineStore(
  'user',
  () => {
    // state
    const userInfo = ref({})
    const token = ref('')
    const userMenus = ref({})
    // actions
    const accountLoginAction = async (payload: IAccount) => {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id } = loginResult
      token.value = loginResult.token
      LocalCache.setCache('userToken', token.value)

      // 请求用户信息
      userInfo.value = await requestUserInfoById(id)
      LocalCache.setCache('userInfo', userInfo.value)

      // 请求用户菜单
      userMenus.value = await requestUserMenusByRoleId(id)
      LocalCache.setCache('userMenus', userMenus.value)

      // 跳转首页
      router.push('/main')
    }

    return { token, userInfo, userMenus, accountLoginAction }
  },
  {
    persist: {
      enabled: true
    }
  }
)
