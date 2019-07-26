import request from "../utils/request.js";

export function login(params) {
    return request({
        url: "/auth/loginByMobile",
        method: "POST",
        data: params
    })
}