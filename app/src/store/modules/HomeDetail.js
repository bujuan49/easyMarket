import { observable, action } from "mobx";
import {homeDetail,homeGoods} from "../../services/index.js";
export default class HomeDetail {
@observable detail=[];
@observable phone=[];
@observable info=[];
@observable common="";
@observable list=[];
@observable pic_list=[];
@action async change(id){
  let data=await homeDetail(id);
let datas=data.data.goodsList.filter(item=>item.id===id*1)
this.detail=datas;
}
@action async goods(id){
  let data=await homeGoods(id);
  this.phone=data.data.gallery;
  this.info.push(data.data.info);
  this.common=data.data.comment.count;
  this.list=data.data.comment.data;
  this.pic_list=data.data.comment.data.pic_list;
  console.log(data.data.comment.data.pic_list);
}
}