interface IPerson<T1, T2> {
  name: T1;
  age: T2
}

const p: IPerson<string, number> = {
  name: "Alexander",
  age: 18
}

console.log(p)

// 设置泛型接口默认类型为 string，如果调用接口的时候不传类型默认就是string，否则就使用传过来的类型
interface IFoo<T = string> {
  initialValue: T,
  valueList: T[],
  handleValue: (value: T) => void
}

// 此处传递了number类型,覆盖IFoo默认的string类型
const foo: IFoo<number> = {
  initialValue: 0,
  valueList: [0, 1, 2, 3],
  handleValue: function (value) {
    console.log(value)
  }
}

console.log(foo)
foo.handleValue(123)