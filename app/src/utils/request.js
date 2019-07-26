import axios from "axios";
import {getCookie} from "./index"

const service=axios.create({
  // baseURL: /jasonandjay.com/.test(window.location.host)?'https://exam.jasonandjay.com':'http://169.254.12.168:7001/',
  baseURL:'http://169.254.12.49:8888/',
  timeout:5000
})

service.interceptors.request.use(
  config=>{
    if(getCookie()){
      config.headers['x-nideshop-token']=getCookie() 
    }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response=>response.data,
  error=>{
    return Promise.reject(error)
  }
)

export default service

