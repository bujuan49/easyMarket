import request from "../utils/request.js";

export function special(params) {
    return request({
        url: "/topic/list",
        method: "GET",
        params
    })
}
//详情
export function specialDetail(params) {
    console.log(params)
    return request({
        url: "/topic/detail",
        method: "GET",
        params
    })
}

//id获取
export function specialDetailList(params) {
    console.log(params)
    return request({
        url: "/topic/related",
        method: "GET",
        params
    })
}