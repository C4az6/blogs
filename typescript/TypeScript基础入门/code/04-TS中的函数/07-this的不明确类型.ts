type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + " eating", message)
}

const info = {
  name: "Alex",
  eating
}

// 隐式绑定
info.eating("吃饭.")

// 显示绑定
eating.call({ name: "Alexander" }, '嘿嘿嘿')
eating.apply({ name: "Jack" }, ['嘻嘻'])
eating.bind({ name: "Rose" }, '喵喵~')()
export { }