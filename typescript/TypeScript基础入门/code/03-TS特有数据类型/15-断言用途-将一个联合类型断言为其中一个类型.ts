interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}
/* demo-01
function getName(animal: Cat | Fish) {
  return animal.name;
} */

/* demo-02
function isFish(animal: Cat | Fish) {
  if (typeof animal.swim === 'function') {
    // 报错：类型“Cat”上不存在属性“swim”
    return true
  }
  return false
} */

/* demo-03
function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    // 将 animal 断言成 Fish：这样就可以解决访问 animal.swim 时报错的问题了。
    return true
  }
  return false
} */


function swim(animal: Cat | Fish) {
  // 类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
  (animal as Fish).swim()
}
const fish: Cat = {
  name: "fish",
  run() { console.log("run") }
}
// 报错: animal.swim is not a function
swim(fish) 