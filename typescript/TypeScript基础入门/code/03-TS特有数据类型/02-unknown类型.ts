function foo() {
  return "abc"
}

function bar() {
  return 123
}

/* 
  unknown类型只能赋值给any和unknown类型
  any类型可以赋值给任意类型
*/

let flag = true
let result: unknown  // 最好不要使用any
// let num = 123
// num = result  // 不能将类型“unknown”分配给类型“number”。

// 下面例子中不确定result是什么类型的,可能是string,也可能是number,这种情况最好使用unknown
if (flag) {
  result = foo()
} else {
  result = bar()
}

console.log(result)

export { }