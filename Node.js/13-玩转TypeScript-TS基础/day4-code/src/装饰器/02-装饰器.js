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
function Age(constructor) {
    class Person2 extends constructor {
        constructor() {
            super(...arguments);
            this.age = 0;
        }
    }
    return Person2;
}
let Person = class Person {
    constructor() {
        this.username = "alex";
    }
};
Person = __decorate([
    Age
], Person);
let p1 = new Person();
console.log(p1);
