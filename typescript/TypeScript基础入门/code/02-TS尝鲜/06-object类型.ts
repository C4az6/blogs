// 对象的类型一般使用interface接口进行定义,接口后续会讲
let info = {
  name: "alex",
  age: 18,
  getName() {
    return this.name
  }
}

/* let info2: object = {
  name: "jack"
}

info2.name  // 无法获取
 */

console.log(info.getName())