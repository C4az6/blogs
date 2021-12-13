function printID(id: number | string | boolean) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123)
printID("abc")
printID(true)

/* 
  总结：
    联合类型允许我们传入联合成员中的任意一个类型
*/