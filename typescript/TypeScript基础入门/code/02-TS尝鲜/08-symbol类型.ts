/* 
  可以在对象中使用symbol定义相同的属性名称，因为symbol函数返回的是不同的值
*/
const title1 = Symbol("alex")
const title2 = Symbol("alex")

const info = {
  [title1]: "程序员",
  [title2]: "老师"
}

console.log(info)

export { }