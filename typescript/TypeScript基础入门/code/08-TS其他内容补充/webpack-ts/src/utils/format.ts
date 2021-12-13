/* 
  默认情况下我们不能定义2个名称相同的模块，但是特殊情况我们希望定义怎么办？
  此时可以使用namespace关键字进行包裹。
*/

/* export function format(time: string) {
  return "2021-12-13 12:36:15"
}

export function format(price: number) {
  return price.toFixed(2)
} */

export namespace time {
  // 格式化时间
  export function format(time: number) {
    return new Date(time)
  }
}

export namespace price {
  // 格式化价格
  export function format(price: number) {
    return price.toFixed(2)
  }
}