class Person {
  name: string = ""
  age: number = 0
  eating() {
    console.log("eating...")
  }
}

class Student extends Person {
  id: number = 0
  studying() {
    console.log("studying...")
  }
}

class Teacher extends Person {
  title: string = ""
  teaching() {
    console.log("teaching")
  }
}

const stu = new Student()
stu.name = "Alexander"
stu.age = 18
// stu.gender = "男"   // 不存在gender属性因此无法赋值,name和age可以赋值因为在Person父类中定义了,Student继承Person那么属性默认也会被继承
console.log(stu)
stu.studying()
stu.eating()

export { }
