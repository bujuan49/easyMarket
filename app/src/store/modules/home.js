import { observable, action } from "mobx";
import { home ,collect,address} from "../../services/index.js";

export default class Home {
<<<<<<< HEAD
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
      console.log(res.data);
      this.data = res.data.banner;
      this.List = res.data.channel;
      this.dataList = res.data.brandList;
      this.product = res.data.newGoodsList;
      this.hot = res.data.hotGoodsList;
      this.topicList = res.data.topicList;
      this.channel=res.data.categoryList[0].goodsList;//居家
      this.kitchen=res.data.categoryList[1].goodsList;//餐厨
      this.diet=res.data.categoryList[2].goodsList;//饮食
      this.accessories=res.data.categoryList[3].goodsList;
      this.clothing=res.data.categoryList[4].goodsList;
      this.body=res.data.categoryList[5].goodsList;
      this.store=res.data.categoryList[6].goodsList;
      this.personal=res.data.categoryList[7].goodsList;
      this.inclination=res.data.categoryList[8].goodsList;
    });
  }
}
=======
    //轮播
    @observable data = [];
    @observable dataList = [];
    @observable addressList = [];


    //轮播
    @action async change() {
        let data = await home()
        this.data = data.data.banner;
    }

    @action async collects(id) {
        let data = await collect(id*1)
        console.log(data.data)
        this.dataList = data.data;
    }

    @action async addresss(id) {
        let data = await address(id)
        console.log(data.data)
        this.addressList = data.data;
    }
}
>>>>>>> 57c67ccde2352d5d7db6538d7bb8f45a25247305
