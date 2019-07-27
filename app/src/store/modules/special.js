import { observable, action } from "mobx";
import { special, login, specialDetail, specialDetailList ,idDiscuss} from "../../services/index.js";
import { setCookie } from '../../utils/index'

export default class Home {
     //专题
     @observable specialData = [];
     //登录
     @observable loginUser = -1;
     //专题详情
     @observable specialList = -1;
     //id详情
     @observable speList = [];
     //id评论
     @observable discuss=[];

     //专题
    @action  async getSpecial() {
        let data = await special({ page: 1, size: 20 })
        this.specialData = data.data.data
    }
    //登录
    @action async getLogin(phone, pwd) {
        let data = await login({ mobile: phone, password: pwd })
        if (data.errno === 0) {
            setCookie(data.data.sessionKey)
            this.loginUser = data.errno;

        } else {
            this.loginUser = 1000;
        }
    }
    //专题详情
    @action async speDetail(id) {
        let num = Number(id)
        let data = await specialDetail({ id: num })
        this.specialList = data.data;
    }
    //id详情
    @action async speDetailList(id) {
        let num = Number(id)
        let data = await specialDetailList({ id: num })
        this.speList = data.data;
    }
    //id评论
    @action async discussList(id) {
        let num = Number(id)
        let data = await idDiscuss({ id: num })
        console.log(data)
        this.discuss = data.data;
    }



}