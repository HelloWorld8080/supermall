import {request} from "network/request";


export function getDate(){
  return request({
    url: '/get',
  })
}
export function postDate(){
  return request({
    url: '/post',
  })
}
