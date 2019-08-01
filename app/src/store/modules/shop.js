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
    @observable del=[];
    @observable ls=[];
    //轮播
    @action async shops() {
        let data = await shop();
     this.data = data.data.cartList;
     this.cartTotal = data.data.cartTotal
     this.pr=data.data.cartTotal.checkedGoodsAmount;
     this.con=data.data.cartTotal.checkedGoodsCount;
     this.ls=data.data.cartList.filter(item=>item.checked===1);
     let id=data.data.cartList.filter(item=>item.checked===1);
     id.map(item=>(
        this.del.push(item.product_id)
      ))
    }
    
    @action async addNum(params){
        let data=await add(params);
        this.mess=data.errno;
    }
    @action async checked(params){
        let data=await check(params);
        this.data=data.data.cartList;
        let id=data.data.cartList.filter(item=>item.checked===1);
        this.ls=data.data.cartList.filter(item=>item.checked===1);
     id.map(item=>(
        this.del.push(item.product_id)
      ))
    this.pr=data.data.cartTotal.checkedGoodsAmount;
    this.con=data.data.cartTotal.checkedGoodsCount;
    }
    @action async updated(params){
        let data=await update(params);
        this.data = data.data.cartList;
        this.pr=data.data.cartTotal.checkedGoodsAmount;
        this.con=data.data.cartTotal.checkedGoodsCount;
    }
    @action async Del(params){
        let data=await del(params);
        this.data = data.data.cartList;
    }
   
}