class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器 getter/setter
  // setter
  set name(newName) {
    this._name = newName
  }
  // getter
  get name() {
    return this._name
  }
}

const p = new Person("Alexander")
console.log(p.name)
p.name = "Rose"
console.log(p.name)

export { }