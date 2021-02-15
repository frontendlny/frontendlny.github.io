import axios from 'axios'
import { getToken } from '@/utils/token'
import { Message } from 'element-ui';

axios.defaults.baseURL = `http:localhost:3000/api/`;
// 添加请求拦截器
// 在发送请求之前做些什么
axios.interceptors.request.use((config)=>{
    config.headers['token'] = getToken();
    return config;
})
// 添加响应拦截器
axios.interceptors.response.use((response)=>{
    // 对响应数据做点什么
    let {code,msg} = response.data; 
    if(code != 200){
        Message({
            message: msg || '网络错误',
            type: 'warning',
            duration:2000
          });
    }
    return response
}, err=>{
    // 对响应错误做点什么
    Message({
        message: '服务器不给力！！！',
        type: 'error',
        duration:2000
      });
    return Promise.reject(err);
})

export default axios