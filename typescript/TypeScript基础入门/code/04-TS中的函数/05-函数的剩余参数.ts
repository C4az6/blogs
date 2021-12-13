function sum(normal: number, ...args: number[]) {
  let total = normal
  console.log(args)
  for (const num of args) {
    total += num
  }
  return total
}

console.log(sum(20))
console.log(sum(20, 30))
console.log(sum(20, 30, 40, 50))
console.log(sum(20, 30, 40, 50, 60))