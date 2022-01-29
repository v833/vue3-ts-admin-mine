import WQRequest from './request/index'
// Promise 本身是可以有类型的
// new Promise<string>(resolve => resolve('123')).then(res => console.log(res))
import LocalCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'
export default new WQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 拦截token
      const token = LocalCache.getCache('token')
      if (token) {
        ;(config.headers as any).Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})
