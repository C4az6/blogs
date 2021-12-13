/* 
  声明对象类型的语法:
    point: {x: number, y: number}
  在给函数传参的时候就必须传入一个对象,对象内部必须包含x,y属性;
  默认情况下不能传多也不能传少;
*/
function printPoint(point: { x: number, y: number }) {
  console.log(point.x)
  console.log(point.y)
}

printPoint({ x: 123, y: 321 })

export { }