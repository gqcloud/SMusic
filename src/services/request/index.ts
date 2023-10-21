import axios, { type AxiosInstance } from 'axios'
import type { QQRequestConfig } from './types'

class QQRequest {
  instance: AxiosInstance
  constructor(config: QQRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.onRequestSuc,
      config.interceptors?.onRequestFai
    )
    this.instance.interceptors.response.use(
      config.interceptors?.onResponseSuc,
      config.interceptors?.onResponseFai
    )
  }
  request<T>(config: QQRequestConfig<T>) {
    if (config.interceptors?.onRequestSuc) {
      config = config.interceptors.onRequestSuc(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.onResponseSuc) {
            res = config.interceptors.onResponseSuc(res)
          }
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  get<T>(config: QQRequestConfig<T>) {
    return this.request({ ...config, method: 'get' })
  }
  post<T>(config: QQRequestConfig<T>) {
    return this.request({ ...config, method: 'post' })
  }
  delete<T>(config: QQRequestConfig<T>) {
    return this.request({ ...config, method: 'delete' })
  }
  patch<T>(config: QQRequestConfig<T>) {
    return this.request({ ...config, method: 'patch' })
  }
}

export default QQRequest
