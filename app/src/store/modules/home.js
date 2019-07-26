import { observable, action } from "mobx";
import { home } from "../../services/index.js";

export default class Home {
  @observable data = [];
  @observable List = [];
  @observable dataList = [];
  @observable product = [];
  @observable hot = [];
  @observable topicList = [];
  @observable channel=[];
  @observable kitchen=[];
  @observable diet=[];
  @observable accessories=[];//配件
  @observable clothing=[];//服装
  @observable  body=[];//婴童
  @observable  store=[];//杂货
  @observable  personal=[];//洗护
  @observable inclination=[];//志趣
  @action change() {
    home().then(res => {
      console.log(res.data.data.categoryList);
      this.data = res.data.data.banner;
      this.List = res.data.data.channel;
      this.dataList = res.data.data.brandList;
      this.product = res.data.data.newGoodsList;
      this.hot = res.data.data.hotGoodsList;
      this.topicList = res.data.data.topicList;
      this.channel=res.data.data.categoryList[0].goodsList;//居家
      this.kitchen=res.data.data.categoryList[1].goodsList;//餐厨
      this.diet=res.data.data.categoryList[2].goodsList;//饮食
      this.accessories=res.data.data.accessories[3].goodsList;
      this.clothing=res.data.data.clothing[4].goodsList;
      this.body=res.data.data.body[5].goodsList;
      this.store=res.data.data.store[6].goodsList;
      this.personal=res.data.data.personal[7].goodsList;
      this.inclination=res.data.data.inclination[8].goodsList;
    });
  }
}
