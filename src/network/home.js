import {request} from "network/request";


export function getHomeMultiData(){
  return request({
    url: '/home/multidata',
  })
}
export function getHomeGoods(type,page){
  return request({
    url: '/home/data?type='+type+'&page='+page,
    // params: {
    //   type,
    //   page
    // }
  })
}
