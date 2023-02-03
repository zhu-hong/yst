import axios from 'axios'
import { Message } from '@/utils/elui'
import { curryingAxios } from 'currying-axios'

let token = ''

if(RUNTIME_MODE === 'serve') {
  token = localStorage.getItem('Authorization')
} else {
  token = sessionStorage.getItem('Authorization')
}

const Basic = axios.create()

Basic.interceptors.request.use((config) => {

  config.headers = {
    'Authorization': token,
  }

  return config
})

Basic.interceptors.response.use((response) => {
  let { status } = response
  if((status >= 200 && status <= 204) || status === 304) {
    const ExcludeURL = []

    if(RUNTIME_MODE === 'serve' && !ExcludeURL.includes(response.config.url) && response.data.code !== 1000) {
      Message.error(`${response.config.url}：${response.data.code}`)
      throw Error('network error')
    }
    return response
  }
}, (error) => {
  let response = error.response

  if(!response) {
    Message.error('无网络')
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

  throw Error('network error')
})

export const basicAxios = curryingAxios(Basic)
