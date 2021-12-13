// 可选类型必须写在必须类型后面！！！
function foo(x: number, y?: number) {
  console.log(x, y)
}

foo(1, 10)
foo(20)

export { }