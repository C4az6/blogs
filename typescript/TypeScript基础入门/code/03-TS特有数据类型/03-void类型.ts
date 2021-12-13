// 该函数没有返回值,因此为void类型,其实可以不写类型,因为会进行类型推导
// function sum(sum1: number, num2: number): void {
function sum(sum1: number, num2: number) {
  console.log(num1 + num2)
  // return '123'   // 如果手动写上了void类型,那么这个函数就不能有返回值,否则就会报错
}

sum(20, 30)
