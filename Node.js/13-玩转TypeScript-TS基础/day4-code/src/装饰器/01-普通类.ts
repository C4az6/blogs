/* class PersonBase {
  constructor(public username: string, public age: number) {
    this.username = username;
    this.age = age;
  }

  say() {
    console.log("hi...");
  }
}

class Baby extends Person {
  cry() {
    console.log("wa wa wa ~");
  }
}

class Student extends Person {
  study() {
    console.log("study...");
  }
}

class Teacher extends Person {
  study() {
    console.log("study...");
  }

  teach() {
    console.log("teach...");
  }
}

class SuperMan2 extends Person {
  study() {
    console.log("fly");
  }
}

// 问题： superMan2如何继承student、teacher的特性呢？使用装饰器
 */