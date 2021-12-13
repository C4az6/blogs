// "Alex" 也可以作为类型,这种叫做字面量类型,就是说message只能赋值为 'Alex',否则报错
let message: "Alex" = "Alex"
// message = 'jack'  // 报错：不能将 'jack' 分配给类型 'Alex'

// 字面量类型的意义在于可以结合联合类型使用
type vips = 'Alex' | 'Jack' | 'Rose'

let userA: vips = 'Alex'
userA = 'Jack'
userA = 'Rose'
// userA = 'jeff' // 报错： jeff 不是vips定义范围内,无法赋值

export { }