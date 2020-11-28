// client端
const dgram = require('dgram');

// 1. 创建socket服务
const server = dgram.createSocket('udp4');
// 2.发送数据
server.send('hello, server', '4444', '127.0.0.1', () => {
  console.log("send data success!");
  // 3.关闭服务
  server.close();
});