import { observable, action } from "mobx";
import {homeDetail} from "../../services/index.js";
export default class HomeDetail {
@observable detail=[];
@action async change(id){
  let data=await homeDetail(id);
  data.data.goodsList.map(item=>{
      return item.
      console.log(item);
  })
//   console.log(data.data.goodsList);
//   console.log(this.detail);
}
}