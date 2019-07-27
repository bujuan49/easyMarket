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
    return request({
        url: "/topic/detail",
        method: "GET",
        params
    })
}

//id获取
export function specialDetailList(params) {
    return request({
        url: "/topic/related",
        method: "GET",
        params
    })
}
//id评论
export function idDiscuss(params) {
    console.log(params)
    return request({
        url: "/comment/list",
        method: "GET",
        params
    })
}