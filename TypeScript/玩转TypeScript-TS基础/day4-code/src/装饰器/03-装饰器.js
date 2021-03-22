/*
  使用装饰器需要在tsconfig.json中开启experimentalDecorators: true
  装饰器本质上是一个函数
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  Age是一个装饰器函数，该函数会自动调用，不需要加()调用，调用的时候会传入下面这个对应
  的class的构造函数
*/
// {new()}：表示一个真正的构造函数
// 我希望装饰出来的age属性的值不是固定的。
// 装饰器函数不是我们主动调用的。
// 如果我们希望传入构造值，那么就得使用    闭包。
function Age(v) {
    // 这个返回的函数才是真正的装饰器要执行的函数
    return function (constructor) {
        class Person2 extends constructor {
            constructor() {
                super(...arguments);
                this.age = v;
            }
        }
        return Person2;
    };
}
let Person = class Person {
    constructor() {
        this.username = "alex";
    }
};
Person = __decorate([
    Age(10)
], Person);
let Cat = class Cat {
    constructor() {
        this.username = "我是一只猫";
    }
};
Cat = __decorate([
    Age(2)
], Cat);
let p1 = new Person();
console.log(p1);
let c1 = new Cat();
console.log(c1);
/* function fn(e, a, b) {
  return a + b * e.clientX;
}

fn(1, 2);

document.onclick = function(e) {
  fn(e, 10, 20)
}; */ 
