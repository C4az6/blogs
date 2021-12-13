// 形参定义顺序：必传参数,有默认值的参数,可选参数
function foo(y: number, x: number = 20, z?: number) {
  console.log(y, x, z)
}

foo(30, 10)
foo(30, 10, 50)