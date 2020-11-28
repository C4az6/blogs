/* 
  在node中，tcp协议基于 net 模块来实现
*/

const net = require('net');
const fs = require('fs');

/**
 * 创建一个服务器端
 *   1. 监听地址以及端口
 *   2. 处理发送到当前监听地址以及端口的数据
 *   3. 返回/发送 数据到连接的客户端
 * 
 * net.server类
 *   new net.Server()
 *   net.createServer() 等于 return new net.Server()
 */

const server = net.createServer(() => {
  // 这个函数其实就是connection事件绑定的函数
})
// 当有客户端连接的时候触发
server.on('connection', socket => {
  console.log("Welcome To TCP Server");
  // socket.write('连接者,你好.')
  // 发送一个图片给客户端
  let data = fs.readFileSync('./server/1.jpg');
  console.log(data.length);
  socket.write(data);
  socket.end();
  /*   socket.on('data', data => {
      console.log(socket.remoteAddress, socket.remotePort, data.toString());
    }) */
})

// 监听地址以及端口
server.listen(4444, '127.0.0.1', () => {
  console.log("[+] TCP server listen 127.0.0.1:4444...")
});