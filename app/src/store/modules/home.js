import { observable, action } from "mobx";
import { home ,collect} from "../../services/index.js";

export default class Home {
    //轮播
    @observable data = [];
    @observable dataList = [];


    //轮播
    @action async change() {
        let data = await home()
        this.data = data.data.banner;
    }

    @action async collects(id) {
        let data = await collect(id*1)
        console.log(data.data)
        this.dataList = data.data.banner;
    }
}