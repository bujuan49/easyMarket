import { observable, action } from "mobx";
import { special, login, specialDetail, specialDetailList, idDiscuss, pingLun } from "../../services/index.js";
import { setCookie } from '../../utils/index'

export default class Special {
    //专题
    @observable specialData = [];
    //登录
    @observable loginUser = -1;
    //专题详情
    @observable specialList = -1;
    //id详情
    @observable speList = [];
    //id评论
    @observable discuss = [];

    @observable pingLunList = [];


    //专题
    @action  async getSpecial() {
        let data = await special({ page: 1, size: 20 })
        this.specialData = data.data.data
    }
    //登录
    @action async getLogin(phone, pwd) {
        window.localStorage.setItem('user', phone)
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
        console.log(num)
        let data = await idDiscuss({ valueId: num, typeId: 1 })
        console.log(data.data.data)
        this.discuss = data.data.data;
    }

    //添加评论
    @action async pingLuns(val, num) {
        let data = await pingLun({ content: val, typeId: 1, valueId: num })
        console.log(data)
    }



}