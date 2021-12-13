type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFirend?: {
      name: string;
    }
  }
}

const info: Person = {
  name: "Alex",
  friend: {
    name: "Jack",
    girlFirend: {
      name: "Rose",
    }
  }
}

console.log(info.name)
console.log(info.friend?.name)  // 如果没有friend就直接返回undefined
console.log(info.friend?.age)
console.log(info.friend?.girlFirend?.name)

const girlFriendName = info?.friend?.girlFirend.name
console.log(girlFriendName)
