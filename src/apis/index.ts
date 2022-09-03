import Request from './base'
import { BASE_URL, TIME_OUT } from './config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'xxx'
      if (token){
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('requestInterceptor', config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('requestInterceptorCatch', err)
    },
    responseInterceptor: (res) => {
      console.log('responseInterceptor', res)
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('responseInterceptorCatch', err)
    }
  }
})

export default request
