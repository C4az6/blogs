//proteched：在类内部和子类中可以访问

/* class Person {
  protected name: string = "Jack"
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const stu = new Student()
console.log(stu.getName()) */

class Animal {
  color: string;
  constructor(color) {
    this.color = color
  }
}

class Dog extends Animal {
  constructor(color) {
    super(color)
    this.color = color
  }
}

class Fish extends Animal {
  constructor(color) {
    super(color)
    this.color = color
  }
}

const a1 = new Animal('red')
console.log(a1)

const d1 = new Dog('blue')
console.log(d1.color)


const f1 = new Dog('pink')
console.log(f1.color)
export { }