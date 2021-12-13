import { add, sub } from './utils/math'
import { time, price } from './utils/format'
// 默认情况下是找不到图片模块的，我们需要手动声明该文件类型
import image from './images/4584342.png'
// 在TS环境中默认无法找到loadsh的声明文件
import _ from 'loadsh'
/* interface IPerson {
  name: string
  age: number
}

class Person implements IPerson {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getUserInfo() {
    return `[*] my name is: ${this.name}, i am ${this.age} years old.`
  }
}

const p1 = new Person('惠兰', 18)
console.log(p1)
console.log(p1.getUserInfo())
 */
// console.log(add(1, 2))
// console.log(sub(3, 1))
// console.log(time.format(Date.now()))
// console.log(price.format(19))


// console.log(username)
// console.log(age)
// console.log(isLogin)
// console.log(getPwd())
// const p1 = new Person('惠兰', 18)
// console.log(p1)

// console.log(_.join(['hello', 'typescript']))
// const res = _.join([1, 2])
// console.log(res)
$.ajax({
  url: "http://123.207.32.32:8000/home/multidata",
  success(res: any) {
    console.log(res)
  }
})