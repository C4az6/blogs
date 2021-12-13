function foo(): never {
  while (true) {
    // 死循环,永远不会有值
  }
}

function bar(): never {
  // 抛出异常,程序中断
  throw new Error()
}

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log("string");
      break;
    case 'number':
      console.log("number");
      break;
    /*     case 'boolean':
          console.log("boolean");
          break; */
    default:
    /* 
      check是一个never类型,表示永远不会有值,但是你把message赋值给我,就会报错;
      我们期望程序永远不会走到default里面来,因此通过这种方式就能判断出少些了一些case条件.
    */
    // const check: never = message
  }
}

handleMessage('abc')
handleMessage(1234)
// 例如现在传入boolean,如果忘记加case判断条件,此时会进入default给check赋值,ts就会提示代码错误,帮助我们提前发现错误,不需要等到编译时才知道代码错误。
handleMessage(false)

/* 
总结：
  一个函数如果明确不会有返回值,那么使用void或其他类型都不合适,此时应该使用never类型;
  可以通过never结合switch...case做判断,帮助我们在编码时就发现错误.
*/