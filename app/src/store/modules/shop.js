import { observable, action } from "mobx";
import { shop,add,check,update,del } from "../../services/index.js";

export default class Shop {
    //轮播
    @observable data = [];
    @observable mess=[];
    @observable count=[];
    @observable price=[];
    @observable cartTotal=[];
    @observable pr=[];
    @observable con=[];
    @observable counts=[];
    //轮播
    @action async shops() {
        let data = await shop();
     this.data = data.data.cartList;
     this.cartTotal = data.data.cartTotal
     this.pr=data.data.cartTotal.goodsAmount;
     console.log(data.data.cartTotal);
     this.con=data.data.cartTotal.goodsCount;
     this.price=data.data.cartTotal.checkedGoodsAmount;
     this.counts=data.data.cartTotal.checkedGoodsCount;
    }
    
    @action async addNum(params){
        let data=await add(params);
        this.mess=data.errno;
    }
    @action async checked(params){
        let data=await check(params);
        this.data=data.data.cartList;
        this.price=data.data.cartTotal.goodsAmount;
        this.count=data.data.cartTotal.goodsCount;
       
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
    @action single = async (product_id)=>{
        let id=this.data.find(item=>item.product_id===product_id&&item.checked===1);
        this.pr=this.cartTotal.checkedGoodsAmount;
        this.con=this.cartTotal.checkedGoodsCount;
        console.log(this.cartTotal)
    }
}