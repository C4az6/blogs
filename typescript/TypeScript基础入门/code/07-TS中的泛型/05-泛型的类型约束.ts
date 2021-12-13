interface ILength {
  length: number
}

// arg参数必须有number类型的length属性;泛型通过extends关键字配合接口就可以实现类型约束;
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

console.log(getLength("abc"));
console.log(getLength(["abc", "cba"]));
console.log(getLength({ length: 100 }));
