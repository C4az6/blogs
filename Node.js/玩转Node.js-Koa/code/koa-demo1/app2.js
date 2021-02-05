const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');

const app = new Koa();

// 主要有请求，则通过 koaStaticCache 进行处理
app.use(koaStaticCache(__dirname + '/static', {
  // root：__dirname + '/static'  // 与上面的第一个参数效果一样
  prefix: '/public', // 如果当前请求的url是以 /public开始，则作为静态资源请求
}));

app.use((ctx, next) => {
  // ...其他业务逻辑
  console.log("请求来了")
});

// 监听当前机器的地址，端口
app.listen(80);