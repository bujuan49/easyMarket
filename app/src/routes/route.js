import loadable from "react-loadable";
import React from "react"
import Home from "../views/Home/home.js";//入口
import Specical from "../views/Home/Special/special.js";//专题
import Classify from "../views/Home/Classify/classify.js";//分类
import Shop from "../views/Home/Shop/shop.js";
import My from "../views/Home/My/my.js";//我的
import Login from "../views/Login/login.js";//我的
import SpecialDetail from '../views/Home/Special/specialDetail/specialDetail.js'
import moreDetail from '../views/Home/Special/specialDetail/moreSpecial.js'
import sayMore from '../views/Home/Special/specialDetail/sayMore.js'
import ClassifyList from '../views/Home/Classify/classifylist/classifylist'
import Collect from "../views/Home/My/collect/collect";//我的
import Address from "../views/Home/My/address/address";//我的
import newAddress from "../views/Home/My/address/newAddress/newAddress";//我的
import HomeComment from "../views/Home/Index/HomeComment/HomeComment.js";
import HomeBrand from "../views/Home/Index/HomeBrand/HomeBrand.js";
function Loading() {
    return <div>...loadding</div>
}
const Index = loadable({//首页
    loader: () => import("../views/Home/Index/index.js"),
    loading: Loading
})
const HomeDetail = loadable({//详情
    loader: () => import("../views/Home/Index/HomeDetail/HomeDetail.js"),
    loading: Loading
})
const route = [{
    path: "/login",
    component: Login
}, {
    path: "/home",
    component: Home,
    children: [{
        path: "/home/comment/:id",
        component: HomeComment
    }, {
        path: "/home/brand/:id",
        component: HomeBrand
    }, {
        path: "/home/goods/:id",
        component: HomeDetail
    }, {
        path: "/home/index",
        component: Index
    }, {
        path: "/home/specical",
        component: Specical
    }, {
        path: "/home/classify",
        component: Classify
    }, {
        path: "/home/shop",
        component: Shop
    }, {
        path: "/home/my",
        component: My
    }, {
        path: "/home/detail/:id",
        component: SpecialDetail
    }, {
        path: "/home/classifylist/:id",
        component: ClassifyList
    }, {
        path: "/home/collect",
        component: Collect
    }, {
        path: "/home/address",
        component: Address
    }, {
        path: "/home/newAddress",
        component: newAddress
    }, {
        path: "/home/moredetail",
        component: moreDetail
    }, {
        path: "/home/saymore",
        component: sayMore
    }, {
        from: "/",
        to: "/home/index"
    }]
}, {
    from: "/",
    to: "/home"
}]

export default route;