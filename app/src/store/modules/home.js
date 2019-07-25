import { observable, action } from 'mobx';

export default class Home {
    @observable count = 1000;

    @action changeCount(type) {
        type === '+' ? this.count++ : this.count--;
    }
}