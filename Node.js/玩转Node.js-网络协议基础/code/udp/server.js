// server端
const dgram = require('dgram');

// 1. 第一种创建socket服务的方式
// const server = new dgram.Socket();
/* 
  第二种创建方式，其实就是return new dgram.Socket()封装成一个API;
  第一个参数是协议类型，udp4表示IPV4，udp6表示IPV6
*/
// const server = dgram.createSocket('udp4', (data)=>{
//     console.log("receive data: ", data.toString());
// });

const server = dgram.createSocket('udp4');
server.on('error', err=>{
  console.log(`服务器异常: \n${err.stack}`)
  server.close();
});

server.on('message', (msg, rinfo)=> {
  console.log(`服务器接收到来自${rinfo.address}:${rinfo.port}的 ${msg}`)
});

server.on('listening', ()=>{
  const address = server.address();
  console.log(`服务器监听 ${address.address}: ${address.port}`);
});

/* 
  2. 监听端口
    使用server.bind([port],[,address],[,callback])
      port：未指定则由路由系统分配
      address：默认0.0.0.0，表示所有地址IP
      callback：绑定成功后的回调
*/
server.bind('4444', '127.0.0.1')



