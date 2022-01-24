import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// 类的封装性更强 可以通过 xx.xx xx.yy 调用
import type { WQRequestConfig, WQRequestInterceptors } from './type'
class WQRequest {
  private _instance: AxiosInstance
  interceptors?: WQRequestInterceptors
  constructor(config: WQRequestConfig) {
    this._instance = axios.create(config)
    this.interceptors = config.interceptors
    this._instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this._instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig) {
    this._instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default WQRequest
