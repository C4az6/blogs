function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {
  console.log(arg1, arg2, arg3)
  console.log("剩余参数: ", args)
}

// 剩余参数只能使用第一个参数的类型，下面例子的剩余参数的类型只能是number类型
foo<number, string, { name: string }>(10, 'abc', { name: "Alexander" }, 11, 12, 13)

export { }