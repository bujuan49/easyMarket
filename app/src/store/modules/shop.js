import { observable, action } from "mobx";
import { shop } from "../../services/index.js";

export default class Shop {
    //轮播
    @observable data = [];

    //轮播
    @action async shops() {
        let data = await shop()
        console.log(data)
        this.data = data.data.cartList;
    }
}