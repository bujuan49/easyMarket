import { observable, action } from "mobx";
import {homeDetail,homeGoods,comment,countNum} from "../../services/index.js";
export default class HomeDetail {
@observable detail=[];
@observable phone=[];
@observable info=[];
@observable common="";
@observable list=[];
@observable pic_list=[];
@observable attribute=[];
@observable issue=[];
@observable goodsList=[];
@observable inf=[];
@observable comment=[];
@observable img=[];
@observable names=[];
@observable counts=[];
@observable productId=[];

@action async change(id){
  let data=await homeDetail(id);
let datas=data.data.goodsList.filter(item=>item.id===id*1)
this.detail=datas;
this.goodsList=data.data.goodsList;
console.log(data.data.goodsList)
}
@action async goods(id){
  let data=await homeGoods(id);
  this.phone=data.data.gallery;
  this.info.push(data.data.info);
  this.inf=data.data.info;
  console.log(data.data.productList[0].id);
  this.names=data.data.brand.name;
  this.common=data.data.comment.count;
  this.list=data.data.comment.data;
  this.pic_list=data.data.comment.data.pic_list;
  this.attribute=data.data.attribute;
  this.issue=data.data.issue;
  this.productId=data.data.productList;

}

@action async remark(id){
  let data=await comment(id);
  this.comment=data.data.data;
  console.log(data.data.data);
}

@action async count(){
  let data=await countNum();
  this.counts=data.data.cartTotal.goodsCount;
  console.log(data.data.cartTotal.goodsCount);
}
}