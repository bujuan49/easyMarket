import { observable, action } from "mobx";
import { home, special, login, specialDetail } from "../../services/index.js";

export default class Home {
    @observable data = [];
    @observable specialData = [];
    @observable loginUser = -1;


    @action change() {
        home().then((res) => {
            this.data = res.data.data.banner
        })
    }
    @action getSpecial() {
        special().then((res) => {
            console.log(res.data.data)
            this.specialData = res.data.data
        })
    }
    @action getLogin(phone, pwd) {
        login({ mobile: phone, password: pwd }).then((res) => {
            console.log(res.data)
            if (res.data.errno === 0) {
                this.loginUser = res.data.errno;
            } else {
                this.loginUser = 1000;
            }
        })
    }
    @action specialDetail(id) {
        specialDetail({ id: id }).then(res => {
             console.log(res.data)
        })
    }
}