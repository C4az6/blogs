/* 
  private修饰的属性或者方法只能在同一个内的内部访问,即使是子内也无法访问
*/
class Person {
  private name: string = null
  age: number = 0

  // 封装了2个方法, 通过方法来访问name
  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }

  private getPassword() {
    console.log("密码为: 123456789asdf")
  }

  getpwd() {
    return this.getPassword()
  }
}

class Student extends Person {
  gender: string;
  constructor(age, gender) {
    super()
    // this.name = name // 属性“name”为私有属性，只能在类“Person”中访问
    this.age = age
    this.gender = gender
  }
}

const p = new Person()
console.log(p.getName())
p.setName("Alexander")
console.log(p.getName())
// console.log(p.getPassword())
// 要通过类中暴露出来的方法才能访问私有方法，否则不行
console.log(p.getpwd())

const stu = new Student(14, '女')
console.log(stu.gender, stu.age)
