import { observable, action } from "mobx";
import { catalog, catalogLists, goods } from "../../services/index.js";

export default class Classify {
    //初始渲染
    @observable data = [];
    @observable dataList = {};
    @observable dataLists = [];
    @observable types = -1;
    @observable goodList = [];


    //初始渲染
    @action async catalogList() {
        let data = await catalog()
        this.data = data.data.categoryList;
    }

    //id分类数据
    @action async  cataList(item) {
        this.data.forEach(items => items.type = 0)
        item.type = 1;
        let data = await catalogLists(item.id)
        this.dataList = data.data.currentCategory;
        this.dataLists = data.data.currentCategory.subCategoryList;
    }

    //获取分类ID分类Nav数据
    @action async good(id) {
        console.log(id)
        let data = await goods(id);
        console.log(data.data)
        this.goodList = data.data.brotherCategory;
    }
}