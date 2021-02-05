class MyArray {
    constructor() {
        this._data = [];
    }
    push(v) {
        this._data.push(v);
        return this._data.length;
    }
}
// 对于arr对象这个实例来讲，里面的T就是string
let arr = new MyArray();
arr.push('1');
// 对于arr2对象这个实例来讲，里面的T就是number
let arr2 = new MyArray();
arr2.push(1);
// 和这种写法一样
// let a: Array<number> = [1,2,3];
