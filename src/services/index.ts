import QQRequest from './request'

const qqRequest = new QQRequest({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT
})

export default qqRequest
