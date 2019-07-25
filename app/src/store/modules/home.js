import {observable,action} from "mobx";
import {home} from "../../services/index.js";

export default class Home {
    @observable data=[];
    @observable List=[];
    @action change(){
        home().then((res)=>{
            console.log(res.data.data.channel);
            this.data=res.data.data.banner;
            this.List=res.data.data.channel;
        })
    }
}