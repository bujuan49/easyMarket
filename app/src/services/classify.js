import request from "../utils/request.js";

//初始页数据
export function catalog() {
    return request({
        url: "/catalog/index",
        method: "GET"
    })
}
//根据分类ID获取当前分类信息和子分类
export function catalogLists(params) {
    return request.get('/catalog/current?id=' + params);
}

//获取分类ID分类Nav数据
export function goods(params) {
    return request.get('/goods/category?id=' + params);
}