class Animal {
  action() {
    console.log("animal action")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog running")
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

class Person extends Animal {
  action() {
    console.log("person write code")
  }
}

function makeActions(animals: Animal[]) {
  animals.forEach(item => {
    item.action()
  })
}

// 多态的目的是为了写出更加具备通用性的代码，例如Animal的action方法在其他子类中表现不同的形态
makeActions([new Animal(), new Dog, new Fish(), new Person()])