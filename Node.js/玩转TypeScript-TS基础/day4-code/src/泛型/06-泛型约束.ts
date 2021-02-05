interface Len {
  length: number;
}

function fn2<T extends Len>(a: T) {
  // 不是所有类型都有length属性
  a.length
}

fn2('1');