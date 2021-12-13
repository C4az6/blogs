/* 
  通过抽象类实现计算不同几何图形的面积
*/

function makeArea(shape: Shape) {
  return shape.getArea()
}


// 创建几何图形抽象类
abstract class Shape {
  // 创建几何图形抽象方法
  abstract getArea(): number
}

// 子类继承抽象类并且实现getArea抽象方法
class Rectangle extends Shape {
  private width: number
  private height: number
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))
