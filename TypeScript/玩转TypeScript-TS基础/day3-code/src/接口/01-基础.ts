/**
 * interface
 *  为我们提供一种方式来定义某种结构，ts按照这种结构来检测数据
 * 
 *  写法：
 *      interface 接口名称 {
 *        // ...接口规则
 *      }
 * 
 * 
 *  接口中定义的规则只有抽象描述，不能有具体的值或实现代码
 * 
 *  对象抽象 => 类  (把对象相似的部分提取出来通过这个类去描述对象)
 *  类抽象 => 抽象类  (如果一个类中有一个抽象方法没有实现，那么这个类就是抽象类)
 *  抽象类 => 接口    (如果一个抽象类中的所有成员都是抽象的，这个类就是接口)
 */

// 定义一个名为Options接口,可以把接口看成是一个对象，但是不完全是，有些细节不一样。
interface Options {
  // width: number = 1,   // 接口中的代码不能有值
  width: number,
  height: number
}

function fn(opts: Options) {
  console.log(opts);
}

// fn();   // 报错，没有传入参数
// fn({});   // 传入的参数类型不对，ts会按照接口中定义的数据去检测
// fn({width: 300});   // 缺少height属性

// 细节：类型检测只检测必须的属性是否存在，不会按照顺序进行检测，是无序的
fn({ width: 200, height: 150 });    // 正确



