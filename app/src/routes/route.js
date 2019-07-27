import Home from "../views/Home/home.js";//入口
import Index from "../views/Home/Index/index.js";
import Specical from "../views/Home/Special/special.js";//专题
import Classify from "../views/Home/Classify/classify.js";//分类
import Shop from "../views/Home/Shop/shop.js";
import My from "../views/Home/My/my.js";//我的
import Login from "../views/Login/login.js";//我的
import SpecialDetail from '../views/Home/Special/specialDetail/specialDetail.js'
import HomeDetail from "../views/Home/Index/HomeDetail/HomeDetail.js";
const route = [{
    path: "/login",
    component: Login
}, {
    path: "/home",
    component: Home,
    children: [{
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