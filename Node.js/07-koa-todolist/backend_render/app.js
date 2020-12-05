const Koa = require('koa');
const StaticCache = require('koa-static-cache');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(StaticCache('./static', {
  prefix: '/static',
  gzip: true
}));

app.listen(80, ()=>{
  console.log("server is running at: 0.0.0.0:80");
});
