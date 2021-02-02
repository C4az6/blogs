/**
 * x 只能是数字类型，如果需要接收任意类型的参数，那么需要使用any，或者函数重载
 * @params x
 */
/* function fn(x: number): number {
  return x * 10;
}

fn(10);
fn('10'); */
// 通过泛型实现上面需求
/*
   很多时候，参数类型是写死的，这样不利于复用。
   我们需要给类型这种值设置变量。
   语法：<类型变量名>，一般情况使用单字母大写，比如 T，E...
   写在函数名和参数列表之间，这是函数的写法，后面还有类的、接口的。
*/
// 给函数的类型设置了一个变量，接收的参数给类型用
/* function fn<T>(x: T): number {
  return Number(x) * 10;
} */
// fn(1);    // 在调用fn函数的时候，同时给T赋值number
// let result = fn<number>(10);  // 主动告知类型
// let res = fn<string>(10);   // 有问题 number类型的参数不能赋值给string类型
// 传递什么类型的参数就告诉TS按照什么类型来检测
/* function fn<T,S>(arg1: T, arg2: S): [T,S] {
  return [arg1, arg2];
}

let a = fn<string, number>('a',1)
console.log(a); */
