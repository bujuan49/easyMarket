import request from "../utils/request.js";


export function home() {
    return request({
        url: "/",
        method: "GET"
    })
}

export function collect(params) {
    return request.get('/collect/list?typeId=' + params);
}

//地址
export function address() {
    return request({
        url: "/address/list",
        method: "GET"
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
export function brand(params){//品牌制造商直供
return request({
    url:"/brand/detail?id="+params,
    method:"GET"
})
}
export function list(params){
    return request({
        url:"/goods/list?brandId="+params+"&page="+1+"&size="+10000,
        method:"GET"
    })   
}
export function comment(params){
    return request({
        url:"/comment/list?valueId="+params+"&typeId=0&size=100&page=1",
        method:"GET"
    })
}