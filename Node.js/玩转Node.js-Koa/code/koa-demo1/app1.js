const Koa = require('koa'); // koa本质是一个包装过的http

// 创建一个http服务器，监听请求，本质是http.createServer()
const app = new Koa();

app.use((ctx, next) => {
  // ctx 是 koa处理过的对象
  console.log(1);
  ctx.body = '<h1>Hello，Koa</h1>'
  // 异常处理
  // ctx.throw(404, '页面没了', {a: 1});
  // next的应用场景：判断当前用户是否有权限，如果有权限再调用next()
  next();
})

app.use(async (ctx, next) => {
  console.log(2);
  ctx.body += '<strong>Welcome Use Koa</strong>'
  // await 异步请求/查询数据库
  next();
});

app.use((ctx, next) => {
  // throw new Error('非常严重的错误!');
  let n = Math.random();
  // 不推荐这种写法
  // ctx.n = n;
  ctx.state.n = n;
  // console.log("ctx.request: ", ctx.request);
  next();
})

app.use((ctx, next) => {
  console.log(ctx.state.n);
  ctx.response.body = {
    a: 1,
    b: 2
  };
  ctx.attachment('a.txt');
})

// 监听错误
app.on('error', (err, ctx) => {
  console.log("[-] 检测到错误: ", err);
})

// 监听当前机器的地址、端口
app.listen(80);