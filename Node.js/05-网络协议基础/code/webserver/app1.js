/**
 * 后端入口文件
 * web server：提供给web浏览器访问的服务器
 */

const http = require('http');

// 创建http服务器
const app = http.createServer((req, res) => {
  // 接收到用户的请求
  console.log("有人请求了...");
  /**
   * req: IncomingMessage类的实例对象，保存和提供了当前请求的客户端信息
   * res: ServerResponse类的实例对象，保存和提供了响应的相关方法
   */
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.url);
  // console.log("------------------------");
  // console.log("------------------------");
  // console.log("------------------------");
  // 向客户端发送数据则需要使用到res对象
  // res.write('Hello');
  // res.end("Hello");

  /**
   * 我们需要根据不同的url返回给客户端不同的数据
   * http://127.0.0.1
   *  /：     返回首页
   *  /list:  列表页面
   *  /view:  内容页面
   * 我们如何知道当前用户访问的url地址? 通过req.url 
   */


  /**
   * 设置并写入头信息
   *    res.writeHead(状态码，状态码描述，头信息)
   * 设置头信息
   *    res.setHeader(头信息名称, 值);
   * 
   * 头信息设置的时候需要注意的问题：
   *     头信息的写入与设置必须在res的write、end之前
   *     头信息的设置必须早于内容的发送·1
   */
  // 设置响应头
  // res.setHeader('Content-Type', 'text/html;charset=utf-8');
  // 头信息必须在end之前调用
  res.writeHead(200, http.STATUS_CODES[200], {
    'Content-Type': 'text/html;charset=utf-8'
  });
  //  res.end('内容');

  /**
   * 服务器必须对客户端的每一个请求做对应的处理，否则就会有问题
   * 
   * 下面的处理方式是有问题
   * - 要把输出的内容写在node.js代码里面，代码很不方便编写，维护...
   * - 每一个请求都单独的处理，会特别的麻烦
   */

  switch (req.url) {
    case '/':
      res.end(`
        <html>
    <head>
        <link rel="stylesheet" href="/index.css" />
    </head>
    <body>
        <h1>首页</h1>
    </body>
</html>
        `);
      break;
    case '/list':
      res.end('列表页面');
      break;
    case '/view':
      res.end('内容页面');
      break;
    case '/index.css':
      res.writeHead(200, http.STATUS_CODES[200], {
        'Content-Type': 'text/css;charset=utf-8'
      })
      res.end('body {color: pink; font-size: 12px;}')
      break;
    default:
      res.writeHead(404, http.STATUS_CODES[404], {
        'Content-Type': 'text/html;charset=utf-8'
      });
      res.end('页面被外星人偷走了!!!');
      break;
  }
});

// 指定app监听的端口以及IP地址，IP不填则默认为0.0.0.0
app.listen(80, () => {
  console.log("[+] 服务器启动成功了");
})