/**
 * 函数
 *    函数声明
 *    函数表达式
 * 
 * 类型约束
 *    函数参数
 *    函数返回值
 * 
 * 如果函数没有返回值，就使用void，不能是undefined
 */


// 函数声明写法
// function fn1(x: number, y: number): number {
//   return x + y
// }

// let result = fn1(1,2);
// // fn1('a','b');   // `string`类型的参数不能赋值给`number`类型的参数
// console.log(result);


// 函数表达式
// let fn2 = function(x: number, y:number): number {
//   return x+y;
// }

// console.log(fn2(1,9));


// 完整的函数类型写法
// let fn2: (x:number, y:number) => number = function(x: number, y:number): number {
//   return x+y;
// }

// 根据类型推断可以简写
// let fn2: (x: number, y:number) => number = function(x,y) {
//   return x+y;
// }


// 可选参数，没有返回值就使用viod关键字代替，可选参数使用?标识
// function fn3(x: number, y?: number) :void {};

// console.log(fn3(1));


// 参数默认值
// function fn3(x: number, y = 1): void {
//   console.log(y);
// }
// console.log(fn3(0));


// 剩余参数
function createName(firstName: string, ...args: string[]){
  return firstName + " " + args.join(" ");
}
let res = createName("Alex", "Bob", "Simth");
console.log(res);