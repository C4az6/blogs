const fs = require('fs');
const {
  connect
} = require('http2');

// write

// 写入数据到文件

// input/output => i/o => 流，传输的是二进制数据 => buffer
// 数据（字符串，音频，视频，二进制）=> buffer => stream
// 如果文件不存在则创建
// 如果目录不存在，创建文件则报错
// First Error：node中一种约定，如果一个回调函数可能有错误发生，那么约定回调函数的第一个参数专门用来提供错误对象
// 默认会覆写文件的内容
/* fs.writeFile('./test.txt', 'Hello', (err)=>{
  if(err) {
    console.log("写入失败！");
  }else {
    console.log("写入成功！");
  }
}) */


// let res = fs.writeFileSync('./test2.txt', '好好学习，天天向上!');
// let res = fs.writeFileSync('G:/aaa/1.txt', '好好学习，天天向上!');

// try {
//   fs.writeFileSync('./1.txt', '好好学习，天天向上！');
//   console.log("写入成功!");
// } catch (error) {
//   console.log("写入失败!")
// }

// 给文件追加内容
// fs.appendFileSync('./1.txt', '我是追加的内容哦...');

// 读取文件内容，默认为buffer类型，需要使用toString方法转换成为字符
// const content = fs.readFileSync('./1.txt');
// console.log(content.toString())

// 获取文件其他信息
// let info = fs.statSync('./1.txt');
// console.log(info);
// 判断info是否是文件
// console.log(info.isFile());

// 删除文件
// fs.unlinkSync('./1.txt');


// 文件夹相关操作
// 创建文件夹，不会进行递归创建
// fs.mkdirSync('./a/b');

// 不能删除非空文件夹
fs.rmdirSync('./a/b');

// fs.rmdirSync不能删除非空的文件夹，可以使用递归的方式删除文件夹

// 递归删除文件夹函数
// rmdir('./a');
// function rmdir(dirPath) {
//   let files = fs.readdirSync(dirPath);
//   // console.log(files);
//   files.forEach(item=>{
//     let childPath = dirPath + '/' + item;
//     console.log(childPath)
//     // 当前child可能是文件也有可能是文件夹
//     if(fs.statSync(childPath).isDirectory()) {
//       // 因为文件夹里面可能还会有子文件，所以也不能直接删除
//       // 而是需要调用rmdir方法进行递归
//       rmdir(childPath);
//     }else {
//       // 删除每一个子文件
//       fs.unlinkSync(childPath);
//     }
//   })
//   fs.rmdirSync(dirPath);
// }