class Person {
  // 一定要对constructor中用到的属性进行初始化,否则报错
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("eating~")
  }
}

class Student extends Person {
  id: number
  constructor(name: string, age: number, id: number) {
    super(name, age)
    this.id = id
  }
  eating() {
    console.log("student eating")
    // 调用父类eating方法
    super.eating()
  }
  studying() {
    console.log("studying")
  }
}

const stu = new Student("Alexander", 24, 10001)
console.log(stu)
stu.eating()