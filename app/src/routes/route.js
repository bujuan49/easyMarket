import loadable from "react-loadable";
import React from "react";
import Specical from '../views/Home/Special/special.js'


function Loading() {
    return <div>...loadding</div>
}
const SpecialDetail = loadable({//入口
    loader: () => import('../views/Home/Special/specialDetail/specialDetail.js'),
    loading: Loading
})
const moreDetail = loadable({//入口
    loader: () => import('../views/Home/Special/specialDetail/moreSpecial.js'),
    loading: Loading
})
const sayMore = loadable({//入口
    loader: () => import('../views/Home/Special/specialDetail/sayMore.js'),
    loading: Loading
})
const ClassifyList = loadable({//入口
    loader: () => import('../views/Home/Classify/classifylist/classifylist'),
    loading: Loading
})
const Classs = loadable({//入口
    loader: () => import('../views/Home/Classify/classifylist/classs.js'),
    loading: Loading
})
const Collect = loadable({//入口
    loader: () => import("../views/Home/My/collect/collect"),
    loading: Loading
})
const Address = loadable({//地址
    loader: () => import("../views/Home/My/address/address"),
    loading: Loading
})
const newAddress = loadable({//新地址
    loader: () => import("../views/Home/My/address/newAddress/newAddress"),
    loading: Loading
})
const HomeComment = loadable({
    loader: () => import("../views/Home/Index/HomeComment/HomeComment.js"),
    loading: Loading
})
const HomeBrand = loadable({
    loader: () => import("../views/Home/Index/HomeBrand/HomeBrand.js"),
    loading: Loading
})
// const Specical = loadable({//专题
//     loader: () => import("../views/Home/Special/special.js"),
//     loading: Loading
// })
const Classify = loadable({//分类
    loader: () => import("../views/Home/Classify/classify.js"),
    loading: Loading
})
const Shop = loadable({//购物车
    loader: () => import("../views/Home/Shop/shop.js"),
    loading: Loading
})
const My = loadable({//我的
    loader: () => import("../views/Home/My/my.js"),
    loading: Loading
})
const Login = loadable({//登录
    loader: () => import("../views/Login/login.js"),
    loading: Loading
})
const Index = loadable({//首页
    loader: () => import("../views/Home/Index/index.js"),
    loading: Loading
})
const HomeDetail = loadable({//详情
    loader: () => import("../views/Home/Index/HomeDetail/HomeDetail.js"),
    loading: Loading
})
const Home = loadable({//入口
    loader: () => import("../views/Home/home.js"),
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
        path: "/home/classs",
        component: Classs
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