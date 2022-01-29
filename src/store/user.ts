import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login'
import { IAccount } from '@/service/login/type'
export const useUserStore = defineStore('user', () => {
  const accountLoginAction = async (payload: IAccount) => {
    const loginResult = await accountLoginRequest(payload).then(res => res.data)
    console.log('loginResult: ', loginResult)

  }

  return { accountLoginAction }
})
