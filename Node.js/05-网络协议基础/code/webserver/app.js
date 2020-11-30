const http = require('http');
const fs = require('fs');
const Mime = require('./libs/mime');

let goodsData = [{
    goods_name: '电视',
    goods_price: 3700,
    goods_id: 0001
  },
  {
    goods_name: '键盘',
    goods_price: 299,
    goods_id: 0002
  },
  {
    goods_name: '鼠标',
    goods_price: 130,
    goods_id: 0003
  },
  {
    goods_name: '蓝牙耳机',
    goods_price: 229,
    goods_id: 0004
  },
  {
    goods_name: '显示器',
    goods_price: 1199,
    goods_id: 0005
  }
]

const app = http.createServer((req, res) => {
  console.log("监听到请求了...");
  // 设置默认的响应头
  res.writeHead(200, http.STATUS_CODES[200], {
    "Content-Type": 'text/html;charset=utf-8'
  });
  let content = "";
  /**
   * 把动态与静态资源进行区分:  通过url
   *  约定：以/static 开头的都算是静态，我约定把静态文件都放在了 /static 对应的目录下
   */
  if (req.url.startsWith('/static')) {
    // 静态资源
    staticSend(__dirname + req.url);
  } else {
    // 动态资源
    switch(req.url) {
      case '/user':
        res.writeHead(200, http.STATUS_CODES[200],{'Content-Type': 'application/json;charset=utf-8'});
        let data = goodsData.map(item=>{
          return {"goods_name": item.goods_name, "goods_price": item.goods_price}
        })
        console.log(data);
        res.end(JSON.stringify(data))
        break;
      case '/getbaidu':
        const result = http.request({
          host: 'www.baidu.com'},baiduRes=>{
            let data = "";
            baiduRes.on('data', chunk => {
              data += chunk.toString();
            });
            baiduRes.on('end', ()=>{
              // 响应数据完成
              res.end(data);
            })
          })
          // 请求发送完成
          result.end();
        break;
    }
  }

  function staticSend(filename, headers = {
    'Content-Type': 'text/html;charset=utf-8'
  }, statusCode = 200) {
    if (fs.existsSync(filename)) {
      let ext = filename.substring(filename.lastIndexOf('.') + 1);
      headers['Content-Type'] = Mime.getType(ext);
      res.writeHead(statusCode, http.STATUS_CODES[statusCode], headers);
      content += fs.readFileSync(filename);
      res.end(content);
    } else {
      staticSend(__dirname + '/static/404.html', {
        'Content-Type': 'text/html;charset=utf-8'
      }, 404);
    }
  }
});

app.listen(80, () => {
  console.log("[+] 服务器启动成功了");
})