type Method = "GET" | "POST"
function request(url: string, method: Method) {

}


const options = {
  url: "https://www.google.com/banners",
  method: "POST"
}

// request(options.url, options.method)  // 报错：类型“string”的参数不能赋给类型“Method”的参数。
// 因为options.method经过TS推理是一个string类型,而Method是一个字面量类型,无法将string赋值给一个字面量类型
// 解决方法是通过断言
request(options.url, options.method as 'POST')
export { }