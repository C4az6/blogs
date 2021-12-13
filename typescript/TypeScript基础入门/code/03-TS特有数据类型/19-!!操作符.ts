// 将某个变量快速转换成布尔类型
const message = "Hello TS"
// 传统方式
// const flag = Boolean(message)

// 使用!!操作符快速转换
const flag = !!message

console.log(flag)