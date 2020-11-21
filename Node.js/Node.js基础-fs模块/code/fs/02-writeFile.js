var fs = require('fs'),
  path = require('path');

// fs.writeFile(filename, data, [options], callback);

let w_data = "好好学习天天向上!\r\n"
w_data = new Buffer(w_data);

/**
 * filename, 必选参数
 * data，写入的数据，可以字符或一个Buffer对象
 * [options]，flag，mode（权限），encoding
 * callback读取文件后的回调函数，参数默认err
 */

// fs.writeFile(__dirname + '/writeFileTest.txt', w_data, {
//   flag: 'a'
// }, (err) => {
//   if (err) return console.log(err);
//   console.log("写入成功!");
//   console.log("写入的数据为: ");
// })

// 以追加的方式写文件
// fs.appendFile(filename, data, [options], callback);
fs.appendFile(__dirname + '/test.txt', '使用fs.appendFile追加文件内容', ()=>{
  console.log("追加内容完成!");
})