// 实现方式1：联合类型
/* function getLength(args: string | any[]) {
  return args.length
}

console.log(getLength('hello ts'))
console.log(getLength([123, 321, 123])) */


// 实现方式2：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args: any): number {
  return args.length
}

console.log(getLength("abc"))
console.log(getLength(['alex', 'jack', 'rose']))

export { }