// 通常情况下,定义一个函数的时候都会给参数添加类型注解
function foo(message: string) {

}

const names = ["alex", "jack", "rose"]
names.forEach(item => {
  // item的类型是根据上下文的环境推导出来的,此时可以不加类型注解
  // 上下文中的函数可以不添加类型注解
  console.log(item.split(''))
})