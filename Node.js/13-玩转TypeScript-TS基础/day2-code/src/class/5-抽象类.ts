abstract class Person {   // 抽象类是不能实例化的
  username: string;
  constructor(username: string) {
    this.username = username;
  }

  say() {
    console.log("哈哈哈哈哈");
  }

  /* 
    虽然子类都会有这样的特性，学习，但是子类的学习具体过程不一样，所以在父类确定不了study方法
    的具体实现，父类只能有抽象的约定，接收什么参数，返回什么内容。
    如果一个类中有抽象的方法了，那么这个类2也必须是抽象的。
  */
  abstract study():void // 抽象方法是没有具体代码的
}

class Student extends Person {
  study() {
    console.log("学生有学生的学习方法 - 需要老师教授")
  }
}

class Teacher extends Person {
  study() {
    console.log("老师的学习方法 - 自学");
  }
}

// 如果一个类继承了抽象的父类，就必须实现所有抽象方法，否则这个子类也必须是一个抽象类
abstract class P extends Person {}

let s1 = new Student('alex');
console.log(s1.say());
console.log(s1.study());