class Person {
  username: string = 'alexander';
  private _age: number = 21;

  // getAge(): number {
  //   return this._age;
  // }

  // setAge(age: number): void {
  //   if (age > 0 && age < 150) {
  //     this._age = age;
  //   }else {
  //     console.log("[-]验证未通过!");
  //   }
  // }

  // 存取器，这个age并不会作为方法，而是作为属性去访问，类似Vue中的computed计算属性
  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age > 0 && age < 150) {
      this._age = age;
    }
  }
}

let p1: Person = new Person();

// 需求：允许在外部获取和修改age的值，但是不希望被修改成非法值，比如1000岁

console.log(p1.age)   // 21
p1.age = 121;    // set age 121
console.log(p1.age);  // 121
p1.age = 123;    //set age error
console.log(p1.age);    // 123