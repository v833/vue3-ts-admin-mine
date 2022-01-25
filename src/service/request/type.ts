import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface WQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface WQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WQRequestInterceptors<T>
  showLoading?: boolean
}
