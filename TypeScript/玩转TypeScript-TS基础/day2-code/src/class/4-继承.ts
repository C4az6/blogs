class Person {
  // 在构造函数的参数中如果直接使用public等修饰符，则等同于同时创建了该属性
  constructor(public username: string, public age:number) {
    this.username = username;
    this.age = age;
  }
}


class Student extends Person {
  /**
   * 如果子类没有重写构造函数，则直接使用父类的
   * 如果子类重写了构造函数，则需要手动调用父类构造函数
   * super：关键字，表示父类
   */
   constructor(username: string, age:number, public gender: string) {
    super(username, age);   // 执行父类构造函数
    this.gender = gender
   }
}

let s1 = new Student('alexander', 21, '男');
console.log(s1);