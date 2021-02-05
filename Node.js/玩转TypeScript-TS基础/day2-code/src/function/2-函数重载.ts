// function fn(x, y) {
//   return x + y;
// }

// 如果在js中，我们是可以这么写的，因为没有类型检查,但是在TS中使用类型检查后推荐使用函数重载方式实现
// console.log(fn(1, 2));  // 3
// console.log(fn('a', 'b'));    // ab

// 函数重载,允许我们在TS中给函数传递多种对应类型的参数
function fn(x: number, y: number): number;
function fn(x: string, y: string): string;
function fn(x: any, y: any): any {
  return x + y;
}

console.log(fn(1,2));   // 3
console.log(fn('alex', 'zhang'));   // alexzhang
// console.log(fn('haha', 123));    // 直接报错