import request from "../utils/request.js";
export function home(){
    return request({
        url:"/",
        method:"GET"
    })
}
export function homeDetail(params){
    console.log(params);
    return request({
        url:"/goods/related?id="+params,
        method:"GET",
      })
}