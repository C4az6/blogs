/**
 * 定义数组的方式有2种，第一种可以在元素后面接上[],表示由此类型元素组成的一个数组
 * 第二种方式就是使用数组泛型，Array<元素类型>
 */
let list: number[] = [1,2,3];
console.log(list);
// console.log(list.push('4'));    // 直接报错 不能把字符串类型的数据添加到number类型的数组中

// 数组泛型创建方式
let list2: Array<string> = ['a','b','c'];
console.log(list2);
console.log(list2.push('1,2,3','456'));
// console.log(list2.push(1,2,3));   // 直接报错 不能把number类型的数据添加到string类型的数组中
console.log(list2);

