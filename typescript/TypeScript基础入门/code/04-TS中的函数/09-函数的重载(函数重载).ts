function add(num1: number, num2: number): number    // 没函数体
function add(num1: string, num2: string): string
function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    console.log('comming...', num1, num2)
    return num1.length + num2.length
  }
  return num1 + num2
}

const res = add(20, 30)
const res2 = add("hello", 'TS')
console.log(res, res2)

export { }