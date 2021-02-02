class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
}

let p1 = new Person("alex", 21);

// 接收一个具体的Person对象，对这个对象增加属性
function SuperMan(obj) {
  obj.fly = function () {
    console.log("i can fly!");
  }
}

SuperMan(p1);
p1.fly();

// 我们通过函数去实例化对象
function _(constructor) {
  return new constructor();
}
// 这个时候传入的是构造函数
let arr = _(Array);
let date = _(Date);

/* // 例如JQ
function $() {
  return new JQuery();
} */