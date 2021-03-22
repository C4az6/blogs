class Person {
  /**
   * ts中的类，成员属性必须要声明后使用
   * ts中的类的成员属性不是在构造函数中声明的，是在class内，方法外声明
   * public
   *    公开的，所有的地方都能访问，属性和方法默认是public
   * protected
   *    受保护的，在类的内部和他的子类中才能访问
   * private
   *    私有的，只能在该对象（类）的内部才可以访问
   */

  public username: string = '';
  // private username: string = '';
  // protected username: string = '';

  constructor(name: string) {
    this.username = name;
  }
}


class Student extends Person {
  say() {
    console.log(`${this.username}：哈哈哈`);
  }
}

let p1: Person = new Person('alex');
p1.username = 'john'
console.log(p1.username);
