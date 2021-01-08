/* 
  如果我们希望检测不要这么复杂
      -如果我们希望某些时候，只要包含其中一些规则即可
        - 通过可选参数 ? 方式实现
        - 通过 as 断言   可以传少,不能传多
        - 通过变量转换   可以传多,不能传少
*/

interface Options {
  width: number,
  height: number,
  color: string
}


function fn(params: Options) {
  console.log(params);
}


// fn({
//   width: 200,
//   height: 300
// } as Options);    // 明确告诉ts我传入的就是Options，让ts绕开检测

// 先赋值给一个变量，也可以绕开规则检测，原因是ts没有对obj这个变量做类型检测，但是这种方式只能传多不能传少
let obj = {
  height: 200,
  width: 100,
  color: 'red',
  a: 1,
  b: 2,
  c: 3
}

fn(obj);