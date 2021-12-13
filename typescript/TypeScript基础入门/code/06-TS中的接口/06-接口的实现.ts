interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {

}

/* 
  一个类只能继承一个类，这叫单继承；
  一个接口可以继承多个接口，这叫多继承；
  一个类可以通过 implements 实现多个接口，必须实现接口内的所有属性和方法；
*/
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish swimming")
  }

  eating() {
    console.log("Fish eating")
  }
}

class Person implements ISwim {
  swimming() {
    console.log("Person swimming")
  }
}

// 例如编写一些公共的API,可以称为：面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

// 所有实现了ISwim接口的类对应的实例对象，都可以传入
swimAction(new Fish())
swimAction(new Person())


swimAction({ swimming: function () { console.log("other instance") } })

export { }