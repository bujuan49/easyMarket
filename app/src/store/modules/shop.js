import { observable, action } from "mobx";
import { shop,add,check,update,del } from "../../services/index.js";

export default class Shop {
    //轮播
    @observable data = [];
    @observable mess=[];
    @observable count=[];
    @observable price=[];

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
    @action async checked(params){
        let data=await check(params);
        this.data=data.data.cartList;
        this.price=data.data.cartTotal.goodsAmount-data.data.cartTotal.checkedGoodsAmount;
        this.count=data.data.cartTotal.goodsCount-data.data.cartTotal.checkedGoodsCount;
        console.log(data.data.cartTotal.goodsAmount);
    }
    @action async updated(params){
        let data=await update(params);
        this.data = data.data.cartList;
        console.log(data);
    }
    @action async Del(params){
        let data=await del(params);
        this.data = data.data.cartList;
    }
}