// 1.通过 typeof
/* type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
printID('alexander')
printID(123456) */


// 2.通过 === == !== != switch...case
/* type Direction = "top" | "right" | "bottom" | "left"
function printDirection(direction: Direction) {
  // 2.1 通过if实现判断
  // if (direction === 'top') {
  //   console.log(direction)
  // } else if (direction === 'right') {
  //   console.log(direction)
  // }

  // 2.2 通过switch实现判断
  switch (direction) {
    case "top":
      console.log(direction)
      break;
    case "left":
      console.log(direction)
      break;
  }
}

printDirection('left') */


// 3.通过instanceof
/* function printTime(time: string | Date) {
  if (time instanceof Date) {
    // 判断time是否是Date的实例对象
    console.log("Date instance: ", time)
  } else {
    console.log(time)
  }
}

printTime('2021-12-12 04:26:55')
printTime(new Date())

class Student {
  studying() { console.log("studying") }
}

class Teacher {
  teaching() { console.log("teaching") }
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

work(new Student())
work(new Teacher()) */

// 4. 通过 in
type Fish = {
  // Fish是类型别名,要求传入一个对象,对象内部包含swimming函数
  swimming: () => void
}

type Dog = {
  running: () => void
}

function action(animal: Fish | Dog) {
  if ('swimming' in animal) {
    // 判断animal对象中是否包含swimming属性
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log('swimming')
  }
}

action(fish)