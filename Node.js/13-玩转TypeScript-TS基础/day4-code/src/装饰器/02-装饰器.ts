/* 
  使用装饰器需要在tsconfig.json中开启experimentalDecorators: true
  装饰器本质上是一个函数
*/

/* 
  Age是一个装饰器函数，该函数会自动调用，不需要加()调用，调用的时候会传入下面这个对应
  的class的构造函数
*/

// {new()}：表示一个真正的构造函数
function Age<T extends { new(...args: any[]): {} }>(constructor: T): T {
  class Person2 extends constructor {
    age: number = 0;
  }

  return Person2;
}

@Age
class Person {
  username = "alex";
}

let p1 = new Person();
console.log(p1);