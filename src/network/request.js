import axios from "axios";

export function request(config){
  const instance =axios.create({
    //baseURL: 'http://httpbin.org',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    //timeout: 5000,
  });
  //网络拦截器
  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    //console.log(res.data);
    return res.data
  },err=>{
    console.log(err);
  })
  //返回数据
 return instance(config)
}
