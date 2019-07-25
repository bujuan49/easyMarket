import {observable,action} from "mobx";
export default class Home {
    @observable count = 1000;
    @observable a=1;
    @action change(type){
        type==="+"?this.count++:this.count--;
    }
}