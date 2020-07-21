import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

Vue.prototype.$message = Message

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 开发环境代表代理的路径，生产环境用后端域名
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      //登陆不需要添加token
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    //console.log(err,'err')
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res, 'response data')

    if (res.isError && res.error.statusCode === 500) {
      //token过期的情况下
      store.dispatch('user/resetToken').then(() => {
        //先清除token，此时除了停留当前页面预览，任何路由都会拦截至登陆界面
        Message({
          message: '登录过期，请重新登录',
          type: 'error',
          duration: 2 * 1000
        })
        window.location.href = '/'
        // location.reload() //点击确定，刷新页面会触发路由拦截到login界面
      })
    }
    //因为登接口在vuex里面用的，包了async的。出错的话可以在这里拦截处理，其他的就在业务代码模块统一处理
    if (res.code == 100001 || res.code == 100002) {
      Message({
        message: response.data.message || 'Error',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.response.data.message,
      type: 'error',
      duration: 2 * 1000
    })
    if (error.response.status === 401) {
      store.dispatch('user/resetToken').then(() => {
        //先清除token，此时除了停留当前页面预览，任何路由都会拦截至登陆界面
        Message({
          message: '登录过期，请重新登录',
          type: 'error',
          duration: 2 * 1000
        })
        window.location.href = '/'
        window.localStorage.clear()
        // location.reload() //点击确定，刷新页面会触发路由拦截到login界面
      })
    } else {
      return Promise.reject(error)
    }
  }
)

export default service
