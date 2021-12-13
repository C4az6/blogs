/* class Student {
  static time: string = "23:00"
  static attendClass() {
    console.log("上课")
  }
}

console.log(Student.time)
Student.attendClass() */

class Animal {
  name: string;
  static age: number = 18;
  constructor(name) {
    this.name = name
  }
  static isAnimal(a) {
    return a instanceof Animal
  }
}
let a = new Animal('Jack')
console.log(a.name)
// console.log(a.isAnimal) // 无法通过实例访问静态成员
console.log(Animal.isAnimal(a))
console.log(Animal.age)