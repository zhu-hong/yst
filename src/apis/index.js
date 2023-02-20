import axios from 'axios'
import { Message } from '@/utils/elui'
import { curryingAxios } from 'currying-axios'

const Basic = axios.create({
  timeout: 8000,
})

Basic.interceptors.request.use((config) => {

  config.headers['Authorization'] = RUNTIME_MODE === 'serve' ? localStorage.getItem('Authorization') : sessionStorage.getItem('Authorization')

  return config
})

Basic.interceptors.response.use((response) => {
  return response
}, (error) => {
  let response = error.response

  if(!response) {
    Message.error('服务无响应')
  } else {
    switch(response.status) {
      case 401:
        Message.error('登录失效，请重新登录')
        break
      case 403:
        Message.error('无权限')
        break
      case 404:
        Message.error('未知接口')
        break
      default:
        Message.error('网络错误')
        break
    }
  }

  throw Error(error)
})

export const basicAxios = curryingAxios(Basic)
