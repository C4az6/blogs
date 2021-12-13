function printMessageLength(message?: string) {
  // console.log(message.length)
  // 如果printMessageLength()没有传参数,那么就会报错,可以通过条件判断或者非空断言解决
  /* if (message) {
    console.log(message.length)
  } */
  // 方式2：非空类型断言
  console.log(message!.length)
}

printMessageLength("hello");
// printMessageLength();