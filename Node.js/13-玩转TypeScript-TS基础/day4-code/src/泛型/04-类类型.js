/*
  TS中默认无法给window对象扩展属性，我们需要使用接口来实现
*/
/* interface Window {
  [attr: string]: any
}

window.c4az6 = 'https://www.github.com/c4az6' */
class Person {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }
}
let p1 = new Person("Alex", 21);
function SuperMan(obj) {
    obj.fly = function () {
        console.log("i can fly...");
    };
}
// 通过类型约束限制必须传入构造函数，不能传入字符串、数字、布尔类型的值
function getArray(constructor) {
    // Person表示的是这个类型对应的对象，我们要的是Person的构造函数，不是它的对象
    // 如何表示传入的是一个构造函数而不是一个对象呢？
    // {new()}接收一个可以产生对象的构造函数
    return new constructor();
}
getArray(Array);
let a;
let fn1 = function () { }; // 这种方式表示构造函数
