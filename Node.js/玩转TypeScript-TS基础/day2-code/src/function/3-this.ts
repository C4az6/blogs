/**
 * TS中默认情况下函数中的this默认指向：any
 */

 let obj = {
   a: 10,
   fn() {
     // 因为默认情况下，this是any类型，any类型ts不能提示有任何属性方法
     let document: any;
     // any的值，ts不能提示或者进行类型属性检测
    //  console.log(this.b);    // noImplicitThis:true 的情况下会报错，因为没有b这个属性

     // 可以通过在tsconfig.json中添加noImplicitThis:true选项来取消this的默认any指向
     console.log(this);
   }
 }

//  obj.fn();


// ts会自动推导事件函数中的this
// document.onclick = function() {
//   console.log(this);
// }

let obj1 = {
  a: 1,
  fn(this: Element|Document) {
    
  }
}