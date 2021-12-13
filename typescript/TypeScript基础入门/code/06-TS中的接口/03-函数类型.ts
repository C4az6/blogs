// 使用type定义函数类型
// type CalcFn = (n1: number, n2: number) => number

// 使用接口定义
interface CalcFn {
  // (参数类型): 返回值类型
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

const res = calc(20, 30, add)
console.log("[*] res: ", res)
