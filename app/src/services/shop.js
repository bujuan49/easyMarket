import request from "../utils/request.js";

export function shop() {
    return request({
        url: "/cart/index",
        method: "GET",
    })
}