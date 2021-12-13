/* 
  可选类型：让一个参数本身是可选的，也就是可传可不传
  一个参数是可选类型的时候，这个参数其实是 自身类型 | undefined 的联合类型;
  例如: message?: string, 那么message其实是 string|undefined 的联合类型。
*/

function foo(message?: string) {
  console.log(message)
}

foo()
