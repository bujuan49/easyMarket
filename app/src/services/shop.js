import request from "../utils/request.js";

export function shop() {
    return request({
        url: "/cart/index",
        method: "GET",
    })
}
export function add(params){
    console.log(params);
    return request({
        url:"/cart/add",
        method:"POST",
        data:params
    })
}