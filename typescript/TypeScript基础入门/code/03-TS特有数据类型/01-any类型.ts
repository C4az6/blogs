// 应用场景: 在不想给某些标识符添加具体的数据类型时可以使用any类型,使用any类型,意味着可以赋值任意类型,万不得已不要使用!
let message: any = "Hello TypeScript"

message = 123
message = true
message = {}

console.log(message)