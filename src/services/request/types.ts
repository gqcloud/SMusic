import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

export interface QQInterceptors<T = AxiosResponse> {
  onRequestSuc?: (config: AxiosRequestConfig) => AxiosRequestConfig
  onRequestFai?: (error: any) => any
  onResponseSuc?: (response: T) => T
  onResponseFai?: (error: any) => any
}
export interface QQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QQInterceptors<T>
}
