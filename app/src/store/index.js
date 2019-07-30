import Home from "./modules/home";
import Special from "./modules/special";
import Classify from "./modules/classify";
import Shop from "./modules/shop";

const home = new Home();
const special = new Special();
const classify = new Classify();
const shop = new Shop();

export default {
   home,
   special,
   classify,
   shop
}