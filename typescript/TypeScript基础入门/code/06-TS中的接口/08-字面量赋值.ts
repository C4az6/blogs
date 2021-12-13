interface IPerson {
  name: string
  age: number
  isGirl: boolean
}

const info = {
  name: "Alex",
  age: 12,
  isGirl: false,
  address: "广州市"
}

const p: IPerson = info
console.log("info: ", info)
console.log("p: ", p)
// 拿不到address属性,因为ts在进行字面量赋值的时候会进行freshness擦除操作,将address删除了
// console.log("p.address: ", p.address)