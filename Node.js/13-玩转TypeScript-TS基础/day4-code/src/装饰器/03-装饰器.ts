/* 
  使用装饰器需要在tsconfig.json中开启experimentalDecorators: true
  装饰器本质上是一个函数
*/

/* 
  Age是一个装饰器函数，该函数会自动调用，不需要加()调用，调用的时候会传入下面这个对应
  的class的构造函数
*/

// {new()}：表示一个真正的构造函数

// 我希望装饰出来的age属性的值不是固定的。
// 装饰器函数不是我们主动调用的。
// 如果我们希望传入构造值，那么就得使用    闭包。
function Age(v: number) {
  // 这个返回的函数才是真正的装饰器要执行的函数
  return function <T extends { new(...args: any[]): {} }>(constructor: T): T {
    class Person2 extends constructor {
      age: number = v;
    }
  
    return Person2;
  }
}


@Age(10)
class Person {
  username = "alex";
}

@Age(2)
class Cat {
  username="我是一只猫"
}

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