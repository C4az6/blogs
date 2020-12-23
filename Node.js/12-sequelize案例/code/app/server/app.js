(async function () {
  const Koa = require('koa');
  const KoaStaticCache = require('koa-static-cache');
  const KoaRouter = require('koa-router');
  const KoaBodyParser = require('koa-bodyparser');

  const app = new Koa();

  app.use(KoaStaticCache('./public', {
    prefix: 'public',
    gzip: true
  }));

  const router = new KoaRouter();

  router.get('/', async ctx => {
    ctx.body = "Hello, Koa."
  })

  app.use(KoaBodyParser())
  app.use(router.routes())

  app.listen(80);
})()