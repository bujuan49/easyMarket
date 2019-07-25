import Home from "../views/Home/home.js";//入口
import Index from "../views/Home/Index/index.js";
import Specical from "../views/Home/Special/special.js";//专题
import Classify from "../views/Home/Classify/classify.js";//分类
import Shop from "../views/Home/Shop/shop.js";
import My from "../views/Home/My/my.js";//我的
const route=[{
    path:"/my",
    component:My
},{
    path:"/home",
    component:Home,
    children:[{
        path:"/home/index",
        component:Index
    },{
        path:"/home/specical",
        component:Specical
    },{
        path:"/home/classify",
        component:Classify
    },{
        path:"/home/shop",
        component:Shop
    },{
        path:"/home/my",
        component:My
    },{
        from:"/",
        to:"/home/index"
    }]
},{
    from:"/",
    to:"/home"
}]
export default route;