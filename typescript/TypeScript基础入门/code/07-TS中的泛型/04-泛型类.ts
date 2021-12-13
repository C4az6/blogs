class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

// 根据类型推导得出类型为string
const p1 = new Point('string', '666', 'true')
// 手动传递类型
const p2 = new Point<string>('string', '666', 'true')
// p3是一个Point类型,构造函数的参数为string类型
const p3: Point<string> = new Point('string', '666', 'true')
console.log(p1)
console.log(p2)
console.log(p3)