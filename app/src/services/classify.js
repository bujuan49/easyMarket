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

///goods/list
export function goodsList(params) {
    return request.get('/goods/list?categoryId=' + params);

}

///search/index
export function history() {
    return request.get('/search/index');

}

///search/helper
export function helper(params) {
    console.log(params)
    return request.get('/search/helper?keyword=' + params);

}
