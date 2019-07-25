import Home from "../views/Home/home.js";
import My from "../views/My/my.js";
const route=[{
    path:"/home",
    component:Home
},{
    path:"/my",
    component:My
},{
    path:"/",
    component:Home
}]
export default route;