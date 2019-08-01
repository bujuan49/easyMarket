import { observable, action } from "mobx";
import { shop,add,check,update,del,countNum } from "../../services/index.js";

export default class Shop {
    //轮播
    @observable data = [];
    @observable mess=[];
    @observable count=[];
    @observable price=[];
    @observable cartTotal=[];


    //轮播
    @action async shops() {
        let data = await shop();
        console.log(data)
     this.data = data.data.cartList;
     this.cartTotal = data.data.cartTotal
     this.price=data.data.cartTotal.goodsAmount;
     this.count=data.data.cartTotal.goodsCount;
    }
    
    @action async addNum(params){
        let data=await add(params);
        this.mess=data.errno;
        countNum();
    }
    @action async checked(params){
        let data=await check(params);
        this.data=data.data.cartList;
        this.price=data.data.cartTotal.checkedGoodsAmount;
        this.count=data.data.cartTotal.checkedGoodsCount;
       
    }
    @action async updated(params){
        let data=await update(params);
        this.data = data.data.cartList;
        this.price=data.data.cartTotal.goodsAmount;
        this.count=data.data.cartTotal.goodsCount;
        console.log(data);
    }
    @action async Del(params){
        let data=await del(params);
        this.data = data.data.cartList;
    }
}