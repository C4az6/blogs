const net = require('net');
const fs = require('fs');

/**
 * 创建客户端与udp不同
 * net.Socket 类
 * 
 * 1. new net.Socket()
 * 2. net.createConnection()
 */
let buf = [];
// 要连接的目标主机地址以及端口号
const clientSocket = net.createConnection(4444, '127.0.0.1');
clientSocket.write('hello');
// 监听数据传输
clientSocket.on('data', data => {
  //  console.log(data.toString());
  // 这个地方触发2次是因为分包的原因
  console.log("pic data: ", data);
  console.log(data.length);
  buf.push(data);
})

clientSocket.on('end', () => {
  console.log('数据包接收完成!');
  // 拼装buffer数据
  // console.log(`---------------------\n${buf}`);
  imgBufferData = Buffer.concat(buf);
  console.log("Buffer Data: \n", imgBufferData)
  console.log(imgBufferData.length);
  //  /* 
  //   把接收到的数据组合起来吗，然后通过fs写入到client文件夹中
  //   注意：我们接收到的数据是buffer
  //   保存写入buffer数据到文件
  //  */
  if (!fs.existsSync(__dirname + '/client')) {
    fs.mkdirSync('./client');
  }
  try {
    fs.writeFileSync('./client/01.jpg', imgBufferData)
  } catch (error) {
    console.log("err: ", error);
  }

  const picData = fs.readFileSync('./client/01.jpg');
  console.log("01.jpg二进制数据长度: ", picData.length);
})