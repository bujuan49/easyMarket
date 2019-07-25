import request from "../utils/request.js";

export function special() {
    return request({
        url: "/topic/related",
        method: "GET"
    })
}