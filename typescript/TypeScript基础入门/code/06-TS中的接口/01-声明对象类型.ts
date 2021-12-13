/* 
  通过类型(type)别名来声明对象类型
  type InfoType = {name: string, age: number}
  
  另外一种方式声明对象类型：接口(interface)
  在其中可以定义可选类型
  也可以定义只读类型
*/

interface IInfoType {
  readonly name: string
  age: number
  readonly friend?: {
    name: string
  }
}

const info: IInfoType = {
  name: "Alexander",
  age: 12,
  friend: {
    name: "Jack"
  }
}
console.log(info.friend?.name)
console.log(info.name)
// info.name = "Rose"   // 不能给只读属性赋值
info.age = 20
info.friend.name = '666'    // 如果readonly修饰的是对象，那么对象里面的属性是可以修改的，因为它们是引用类型的
console.log(info);
