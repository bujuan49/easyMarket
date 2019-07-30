import { observable, action } from "mobx";
import { shop,add } from "../../services/index.js";

export default class Shop {
    //轮播
    @observable data = [];
    @observable mess=[];

    //轮播
    @action async shops() {
        let data = await shop();
        console.log(data.data.cartList)
     this.data = data.data.cartList;
    }
    
    @action async addNum(params){
        let data=await add(params);
        this.mess=data.errno;
    }
}