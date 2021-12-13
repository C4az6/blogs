// 1.当函数作为参数时,在函数中如何编写参数类型
function foo() {
  console.log("running foo.")
}

type FooFnType = () => void

function bar(fn: FooFnType) {
  console.log(fn)
}

bar(foo)

// 2.定义常量时,编写函数的类型
// AddFnType 类型是一个函数,接收number类型的参数,返回number类型
type AddFnType = (num1: number, num2: number) => void
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}

console.log(add(10, 20))