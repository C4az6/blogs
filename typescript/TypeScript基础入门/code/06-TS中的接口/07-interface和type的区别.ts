interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: "Jack",
  age: 10
}

/* 
  interface的名称可以重复定义，每次定义都会合并之前定义的接口,从而实现拓展接口中的属性
*/

// type IBar = {
//   name: string
//   age: number
// }

// type IBar = {
  
// }

/* 
  type别名不能重复定义,因此无法实现合并属性，拓展功能
*/