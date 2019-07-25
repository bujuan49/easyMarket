import request from "../utils/request.js";
export function home(){
    return request({
        url:"/",
        method:"GET"
    })
}