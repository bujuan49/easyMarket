import request from "../utils/request.js";

export function special() {
    return request({
        url: "/topic/related",
        method: "GET"
    })
}
//详情
export function specialDetail(params) {
    return request({
        url: "/topic/detail",
        method: "GET",
        data:params
    })
}