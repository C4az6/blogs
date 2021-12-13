class Person {
  // 1.只读属性是可以在构造器中赋值
  readonly name: string
  age?: number
  readonly friend?: Person  // friend是Person的实例对象
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("Alexander", new Person("Jack"))
console.log(p.name)
console.log(p.friend.name)

// 不可以直接修改friend
// p.friend = new Person("Rose")
if (p.friend) {
  p.friend.age = 30
}
console.log(p.friend.age)
// p.name = 'Rose'