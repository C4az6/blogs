/**
 * 与数组类似，但是可以存放多种不同类型
 */

 let data1: [number, string, boolean];
 data1 = [1,'1',true];

 // 注意：顺序要对应
 data1[3] = 2;
//  data1[1] = '1';
//  data1[2] = true;

 // 对于超出（越界）部分，采用的是联合类型，或
//  data1[3] = false;    // 存储number，string，boolean都可以，但不能是其他的
//  data1[4] = {};   // 这样会报错
console.log(data1);