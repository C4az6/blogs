/* 
  这个接口描述的是一个包含fn,并且值的类型为函数的结构体，并不是描述函数结构;  
  注意描述的是一个包含函数的对象结构
*/

/* interface Options {
  fn: Function
}

let o: Options = {
  fn: function () {console.log("I Am Function...")}
}
o.fn();   // I Am Function... */

// 完整描述函数结构写法
// let fn: (x: number, y: number) => number = function (x: number, y: number): number {
//   return x + y
// }

/* 
  定义一个事件函数，那么这个函数必须得有一定的规则；
  我们不能随随便便的把一个函数赋值给事件
*/

/* document.onclick = fn;    // 报错,因为fn函数定义的参数类型是number，而事件触发后的事件对象是Event类型

function fn(x: Event) {
  
}
document.onclick = fn;    // 正确写法 */



// 我们可以使用 interface 来约定函数的结构
// 定义的是函数类型接口,定义了一个x，y参数和返回值都为number类型的函数，根据这种规则进行检测
/* interface IFn {
  (x: number, y: number): number
}

let fn: IFn = function(x: number, y: number): number {return x + y}; */


// 定义了一个接收一个MouseEvent类型参数的函数结构
// 其实函数接口就是定义一种函数规则，然后后面复用这种规则
/* interface MouseEventCallBack {
  (e: MouseEvent): any
}

let fn: MouseEventCallBack = function(a: MouseEvent){

}

document.onclick = fn */


// 再举一个例子
/* 
  定义一个ResponseCallBack函数接口
    函数的第一个参数名为res，Response类型，返回值是any类型的
*/
/* interface ResponseCallBack {
  (res: Response): any
}

function todo(callback: ResponseCallBack) {
  callback(new Response)
}


todo(function(res: Response){
  return 'i am callback...'
}) */


// 再看一个fetch例子
// fetch返回的是一个Promise对象，then方法成功回调函数的参数是一个Response类型对象
/* fetch('url').then( (a: string) => {
  a.indexOf('');    // ts会检测到a不是一个string类型的，根本没有indexOf方法，这时就会报错
})

fetch('url').then((a: Response) => {
  // a.indexOf('');    // Response类型没有这个indexOf方法，这里就会报错
  return a.json();  // Response对象是有json方法的，所以检测通过，可以参考MDN文档的Response对象
}) */


// 再看一个ajax的例子
interface AjaxData {
  code: number,
  data: any
}

interface AjaxCallBack {
  (res: AjaxData): any
}

// ajax函数的参数是一个callback回调函数，类型是AjaxCallBack，AjaxCallBack的参数类型是AjaxData类型
function ajax(callback: AjaxCallBack){
  callback({
    code: 1,
    data: [
      {goods_name: 'IKBC C87红轴', goods_id: 1, goods_price: 299.99, goods_color: 'Black'},
      {goods_name: 'IKBC C87青轴', goods_id: 2, goods_price: 289.99, goods_color: 'Green'},
      {goods_name: 'IKBC C87黑轴', goods_id: 3, goods_price: 279.99, goods_color: 'White'},
    ],
    // message: '123'   // AjaxData没有定义message属性所以为报错
  })


  // 可以通过之前学习到的变量赋值的方式绕过检测
  // let obj = {
  //   code: 1,
  //   data: [],
  //   message: '123'
  // }

  // callback(obj)
}

ajax(function(x: AjaxData){
  console.log(x);
})

// 总结：函数接口其实就是定义某种函数结构，接收的参数是什么类型，返回值是什么类型，做严格约束
// typescript倒逼我们学习了更多javascript语言本身的东西，例如各种规则
