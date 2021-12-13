let message: string | null = ""
// let message: string | null = "Hello"

// 当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数；
// 如果message是空值还是使用message
const content = message ?? "你好,TS"
// const content = message || "你好,TS"
// const content = message ? message : "你好,TS"
console.log(content)


export { }