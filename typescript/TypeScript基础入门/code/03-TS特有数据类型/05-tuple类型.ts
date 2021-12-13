// tuple元组: 多种不同类型元素的组合, [string,number,boolean]

const info: any[] = ["alex", 18, 1.99]

const name = info[0]
console.log(name.length)

// 使用元组就能明确知道数组里面的每个元素的类型
const info2: [string, number, number] = ["Rose", 11, 22]
const name2 = info2[0]
console.log(name2.length)
const num1 = info2[1]
const num2 = info2[2]
console.log(name2, num1, num2)

/* 
总结：
  1.相同元素类型建议存放到数组中
  2.不同元素类型建议存在到元组中
*/

export { }