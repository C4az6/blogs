// this被TS推导出来绑定的是info对象
const info = {
  name: "Alexander",
  eating() {
    console.log(this.name + ' eating')
  }
}

info.eating()

export { }