import { observable, action } from "mobx";
import { catalog, catalogLists, goods, goodsList } from "../../services/index.js";

export default class Classify {
    //初始渲染
    @observable data = [];
    @observable dataList = {};
    @observable dataLists = [];
    @observable goodList = [];
    @observable list = [];
    @observable des = {};

    //初始渲染
    @action async catalogList() {
        let data = await catalog()
        this.data = data.data.categoryList;
        this.dataList = data.data.currentCategory;
        this.dataLists = data.data.currentCategory.subCategoryList;
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
        let data = await goods(id);
        console.log(data.data)
        this.goodList = data.data.brotherCategory;
        this.des = data.data.currentCategory;
        this.goods(id)

    }

    //
    @action async goods(id) {
        let num = Number(id)
        let data = await goodsList(num);
        console.log(data)
        this.list = data.data.data;
    }
}