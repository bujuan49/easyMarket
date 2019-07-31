import { observable, action } from "mobx";
import { home, brand, list, collect, address, addressSave } from "../../services/index.js";

export default class Home {
    //轮播
    @observable data = [];
    @observable dataList = [];
    @observable dataLists = [];
    @observable addressList = [];
    @observable flag = false;

    @observable List = [];

    @observable product = [];

    @observable hot = [];

    @observable topicList = [];

    @observable channel = [];

    @observable kitchen = [];

    @observable diet = [];

    @observable accessories = [];//配件

    @observable clothing = [];//服装

    @observable body = [];//婴童

    @observable store = [];//杂货

    @observable personal = [];//洗护

    @observable inclination = [];//志趣

    @observable brand = [];//品牌

    @observable mode = [];//muji制造商

    @observable type = [];//居家

    @observable addressSaveList = [];//新增地址


    @action async change() {
        let res = await home();
        this.data = res.data.banner;
        this.List = res.data.channel;
        this.type = res.data.categoryList;
        console.log(res.data.channel);
        this.dataList = res.data.brandList;
        this.product = res.data.newGoodsList;
        this.hot = res.data.hotGoodsList;
        this.topicList = res.data.topicList;
        this.channel = res.data.categoryList[0].goodsList;//居家
        this.kitchen = res.data.categoryList[1].goodsList;//餐厨
        this.diet = res.data.categoryList[2].goodsList;//饮食
        this.accessories = res.data.categoryList[3].goodsList;
        this.clothing = res.data.categoryList[4].goodsList;
        this.body = res.data.categoryList[5].goodsList;
        this.store = res.data.categoryList[6].goodsList;
        this.personal = res.data.categoryList[7].goodsList;
        this.inclination = res.data.categoryList[8].goodsList;

    }
    @action async goods(id) {
        let data = await brand(id);
        console.log(data.data);
        this.brand = data.data.brand;
    }
    @action async list(id) {
        let data = await list(id);
        this.mode = data.data.data;
        console.log(data.data.data);
    }
    @action async collects(id) {
        let data = await collect(id * 1)
        console.log(data.data)
        this.dataList = data.data;
    }

    @action async addresss() {
        let data = await address()
        console.log(data.data)
        this.addressList = data.data;
    }

    @action async addressSaves(params) {
        
        let data = await addressSave(params)
        console.log(data)
        this.addresss();
        // this.addressList = data.data;
    }
}
