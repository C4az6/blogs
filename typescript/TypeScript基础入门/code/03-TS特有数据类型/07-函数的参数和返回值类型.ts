/* 
  1.可以给函数的参数添加类型注解 num1: number, num2: number
  2.给返回值加上类型注解: function sum(num1: number, num2: number): number {}
  3.开发中,通常情况下不写返回值类型,通过自动推导出来
*/
function sum(num1: number, num2: number) {
  return num1 + num2
}

console.log(sum(50, 100))