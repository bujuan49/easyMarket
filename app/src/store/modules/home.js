import {observable,action} from "mobx";
import {home,special} from "../../services/index.js";

export default class Home {
    @observable data=[];
    @observable specialData=[];

    @action change(){
        home().then((res)=>{
            console.log(res.data.data.banner);
            this.data=res.data.data.banner
        })
    }
    @action getSpecial(){
        special().then((res)=>{
            console.log(res.data.data);
            this.specialData=res.data.data
        })
    }
}