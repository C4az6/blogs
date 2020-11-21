const fs = require("fs");
const path = require("path");

// readFile(filename, [options], callback);
/**
 * filename，必选参数，文件名
 * [options]，可选参数，可指定flag（文件操作选项，如r+为读写模式；w+读写，文件不存在则创建）以及encoding属性
 * callback读取文件后的回调函数，参数默认第一个err，第二个data数据
 */
fs.readFile(__dirname + '/test.txt', {
  flag: 'r+',
  encoding: 'utf8'
}, (err, data) => {
  if (err) return console.log(err);

  console.log(data);
})