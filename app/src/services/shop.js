import request from "../utils/request.js";

export function shop() {
    return request({
        url: "/cart/index",
        method: "GET",
    })
}
export function add(params){
    return request({
        url:"/cart/add",
        method:"POST",
        data:params
    })
}
export function check(params){
    return request({
        url:"/cart/checked",
        method:"POST",
        data:params
    })
}
export function update(params){
    return request({
        url:"/cart/update",
        method:"POST",
        data:params
    })
}
export function del(params){
    return request({
        url:"/cart/delete",
        method:"POST",
        data:params
    })
}
export function countNum(){
    return request({
        url:"/cart/goodscount",
        method:"GET"
    })
}