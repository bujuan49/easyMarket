import loadable from "react-loadable";
import React from "react"
import Home from "../views/Home/home.js";//入口
import Specical from "../views/Home/Special/special.js";//专题
import Classify from "../views/Home/Classify/classify.js";//分类
import Shop from "../views/Home/Shop/shop.js";
import My from "../views/Home/My/my.js";//我的
import HomeBrand from "../views/Home/Index/HomeBrand/HomeBrand.js";
import SpecialDetail from '../views/Home/Special/specialDetail/specialDetail.js';
import HomeComment from "../views/Home/Index/HomeComment/HomeComment.js";
 function Loading(){
     return <div>...loadding</div>
 }
 const Login=loadable({//登录
    loader:()=>import("../views/Login/login.js"),
    loading:Loading
})
const Index=loadable({//首页
    loader:()=>import("../views/Home/Index/index.js"),
    loading:Loading
})
const HomeDetail=loadable({//详情
    loader:()=>import("../views/Home/Index/HomeDetail/HomeDetail.js"),
    loading:Loading
})

const route = [{
    path: "/login",
    component:Login
}, {
    path: "/home",
    component: Home,
    children: [{
        path:"/home/comment/:id",
        component:HomeComment
    },{
        path:"/home/brand/:id",
        component:HomeBrand
    },{
        path:"/home/goods/:id",
        component:HomeDetail
    },{
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
    },{
        from:"/",
        to:"/home/index"
    }]
}, {
    from: "/",
    to: "/home"
}]

export default route;