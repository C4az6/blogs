// const names1: Array<string> = []  // 这种定义类型的写法不推荐,因为在react的jsx中会有冲突
const names: string[] = []  // 推荐

/*
  names是一个数组类型,但是数组中存放的是什么类型的元素呢?
  在TS开发中,数组类型中存放的数据类型最好是固定的,要么全部string,要么全部number,要么全部boolean
*/
// console.log(typeof names)   // 注意,在js中还是object类型,但是TS中是Array类型

names.push('alexander')
names.push('jack')
names.push('rose')
names.push('jeff')
console.log(names.length, names)
