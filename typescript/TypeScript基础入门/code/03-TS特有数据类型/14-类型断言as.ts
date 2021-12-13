
// 类型断言 as
// 下面代码我们并不知道通过alex ID获取的DOM元素是什么类型的,如果不是HTMLImageElement类型的话，设置src就没有意义了,因此需要使用类型断言来确定具体类型。
/* const el = document.getElementById("alex") as HTMLImageElement
el.src = "url地址" */

// 案例2：Person是Student的父类
class Person {

}

class Student extends Person {
  studying() { }
}

function sayHello(p: Person) {
  // 传入的p 必须是Student的实例对象,也就是Person的子类
  (p as Student).studying()
}

sayHello(new Student())

const message = "Hello TypeScript"
// 如果你想把某个类型转换成其他类型，需要先转成unknown类型
const num: number = (message as unknown) as number
console.log(message, num, (typeof num))