(async function () {
  const Koa = require('koa');
  const Static = require('koa-static-cache');
  const Router = require('koa-router');
  const fs = require('fs');

  const app = new Koa();
  const router = new Router();

  app.use(Static('./static', {
    prefix: '/static',
    gzip: true
  }))

  router.get('/', ctx => {
    // node读取出来的文件传递给前端的默认为二进制，需要手动转换成字符串
    const content = fs.readFileSync('./static/index.html');
    ctx.body = content.toString();
  })

  router.get('/todos', ctx => {

  })



  app.use(router.routes());

  app.listen(80);
})()