var name: string = "alex"
let age: number = 18
const height: number = 1.99

// 类型推导：默认情况进行赋值时, 会将赋值的值类型,作为前面标识符的类型,该过程称为类型推导
let foo = "foo"
// foo = 123   // 不能将number类型赋值给string类型
// foo = "abc"  // OK

export { }