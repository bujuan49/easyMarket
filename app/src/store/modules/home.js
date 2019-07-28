import { observable, action } from "mobx";
import { home } from "../../services/index.js";

export default class Home {
    //轮播
    @observable data = [];

    //轮播
    @action async change() {
        let data = await home()
        this.data = data.data.banner;
    }
}