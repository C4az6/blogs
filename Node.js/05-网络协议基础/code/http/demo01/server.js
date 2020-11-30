// 1. 引入内置模块http
const http = require('http');

// 2. 创建http服务器实例对象
const server = http.createServer();

// 3. 启动服务器并且设置监听端口
server.listen(80, '0.0.0.0', () => {
  console.log("server is running at: 0.0.0.0:80");
});

// 4. 注册监听事件，监听请求
server.on('request', (request, response) => {
  console.log("receive request： ", response.socket.remoteAddress);
})