/* 
  希望规则是：一组由数字进行key命名的对象，比如下标为0,1,2,3,4这样的
  我们可以使用索引签名
    为数据定义一组具有某种特性的key的数据

  索引key的类型只能是 number和string两种
*/

// 需求类似下面这种结构
// interface Options {
//   0: string,
//   1: string,
//   2: string
// }


// 定义了一组规则，key是number类型，使用中括号包裹[变量名: 类型], value是any任意类型
interface Options {
  // key是number，value是any类型的
  // [attr: number]: any,

  // key是string的话，会同时支持string和number类型
  [attr: string]: any,
  length: number
}

function fn(params: Options) {
  console.log(params)
}

// 这种结构类似调用document.querySelectorAll('div')返回的NodeList结构
fn({
  0: 100,
  a: 'haha',
  length: 1
})