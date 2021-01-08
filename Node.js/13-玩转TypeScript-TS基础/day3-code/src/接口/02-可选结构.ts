/**
 * 如果规则中有些是可选的，那么通过 ? 标识。
 * 只读属性通过 readonly 关键字标识
 */

interface Options {
  width: number,
  height: number,
  color?: string,
  readonly opcity: number
}

function fn(params: Options) {
  console.log(params);
  // params.opcity = 1.2    // 报错，只读属性不能重新赋值
}

fn({
  width: 200,
  height: 250,
  opcity: 0.5
})