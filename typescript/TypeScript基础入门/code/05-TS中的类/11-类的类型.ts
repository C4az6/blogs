class Person {
  name: string = "123"
  eating() {
    console.log('eating')
  }
}

const p = new Person()
p.eating()
const p1: Person = {
  name: "Alex",
  eating() {
    console.log(`${this.name} eating`)
  }
}
console.log(p1.name)
p1.eating()

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({ name: "Jack", eating: function () { } })

export { }
