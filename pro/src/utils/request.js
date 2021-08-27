//引入axios包
import axios from 'axios'
import { Toast } from 'vant'

// 根据环境不同引入不同baseApi地址
import { baseUrl } from '@/config'

//2.创建axios对象信息
const Server = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
})

//3.定义前置拦截器。token值。。。
Server.interceptors.request.use(function (config) {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    })
    return config
}, function (error) {
    return Promise.reject(error)
})

//4.定义后置拦截器，格式化返回的数据
Server.interceptors.response.use(function (response) {
    Toast.clear()
    //对数据进行格式化的操作了。
    return response;
}, function (error) {
    return Promise.reject(error)
})


// 5. 抛出对象，main.js中引入拦截器的信息。
export default Server;