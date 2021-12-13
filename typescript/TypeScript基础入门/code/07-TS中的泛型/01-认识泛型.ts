function sum<Type>(num: Type): Type {
  return num
}

// 1.调用方式1：明确的传入类型
let res;
// res = sum<string>('20')
// res = sum<{ name: string }>({ name: 'Alexander' })
// res = sum<any[]>(["abc"])
console.log(res)

// 2.调用方式2：类型推导
res = sum(50)
res = sum("开始学习泛型")
console.log(res)

/* 
  泛型实现的是类型的参数化！
  在定义这个函数时，我不决定这些参数的类型，而是让调用者以参数的形式告知，
  调用者传参的时候告知我什么类型我就使用什么类型定义参数；
*/