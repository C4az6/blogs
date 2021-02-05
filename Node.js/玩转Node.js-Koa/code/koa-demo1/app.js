const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const Router = require('koa-router');
const Swig = require('koa-swig');
const co = require('co');

const app = new Koa();

let users = [{
    username: 'Alex'
  },
  {
    username: 'Jack'
  },
  {
    username: 'Rose'
  },
  {
    username: 'Jim'
  }
]

app.use(koaStaticCache(__dirname + '/static'), {
  prefix: '/public'
});

const router = new Router();

// 初始化渲染函数
/**
 * root: 模板存放目录
   autoescape：是否自动 escape 编码
   cache：是否启用缓存
	 ext：模板后缀，'html'
*/
const render = Swig({
  root: __dirname + '/views',
  autoscape: true,
  cache: false,
  ext: '.html'
});

// 把渲染方法挂载到 Context 下
app.context.render = co.wrap(render);

router.get('/list', async (ctx, next) => {
  ctx.body = await ctx.render('list.html', {
    users
  })
})

app.use(router.routes());

app.listen(80);