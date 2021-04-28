import {request} from "network/request";


export function getDate(){
  return request({
    url: '/home/multidate',
  })
}
export function postDate(){
  return request({
    url: '/post',
  })
}
