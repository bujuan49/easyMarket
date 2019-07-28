import request from "../utils/request.js";
export function home(){
    return request({
        url:"/",
        method:"GET"
    })
}
export function homeDetail(params){//详情页
    return request({
        url:"/goods/related?id="+params,
        method:"GET",
      })
}
export function homeGoods(params){
    return request({
        url:"/goods/detail?id="+params,
        method:"GET"
    })
}