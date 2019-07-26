import {observable,action} from "mobx";
import {home} from "../../services/index.js";

export default class Home {
    @observable data=[];
    @observable List=[];
    @observable dataList=[];
    @observable product=[];
    @observable hot=[];
    @action change(){
        home().then((res)=>{
            console.log(res.data.data);
            this.data=res.data.data.banner;
            this.List=res.data.data.channel;
            this.dataList=res.data.data.brandList;
            this.product=res.data.data.newGoodsList;
            this.hot=res.data.data.hotGoodsList;
        })
    }
}