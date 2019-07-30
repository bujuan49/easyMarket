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