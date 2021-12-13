// 一种组合类型的方式：联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"

// 另一种组合类型的方式：交叉类型
type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() { }
}

const obj2: MyType2 = {
  flying() { },
  // 只写一个会报错，ISwim和IFly中的方法全部都得实现
  swimming() { }
}


export { }