function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}

const res1 = calc(10, 20, function (n1, n2) {
  return n1 + n2
})
console.log(res1)

const res2 = calc(10, 20, function (a, b) {
  return a - b
})
console.log(res2)