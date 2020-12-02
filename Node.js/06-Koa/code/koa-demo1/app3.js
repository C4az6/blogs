const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const Router = require('koa-router');
const app = new Koa();

app.use(koaStaticCache(__dirname + '/static', {
  prefix: '/public'
}));


// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   下面的代码其实也是一种路由，只不过特别简单，还需要处理很多其他一些问题，因此我们需要使用模版
//   switch (ctx.request.url) {
//     case '/user':
//       ctx.response.body = "<h1>user 页面</h1>"
//       break;
//   }
// })

const router = new Router();
// 通过 get 方式 发送 / 请求 => get http://127.0.0.1
router.get('/', (ctx, next) => {
  ctx.body = "<h1>首页</h1>";
})

// 子路由,也叫嵌套路由
const userRouter = new Router();
userRouter.get('/', (ctx, next) => {
  ctx.body = "<h1>用户首页</h1>";
})

userRouter.get('/address', (ctx, next) => {
  ctx.body = '<h1>用户收货地址</h1>'
})

router.use('/user', userRouter.routes());

// 子路由：添加前缀方式
const itemRouter = new Router({
  prefix: '/item'
});

itemRouter.get('/add', (ctx, next) => {
  ctx.body = '<h1>添加物品</h1>';
})

// 子路由 动态路由
const goodsRouter = new Router();
goodsRouter.get('/goods/:id', (ctx, next) => {
  // URL生成器
  console.log(Router.url('/list', {
    page: 1
  }, {
    query: {
      order: 'desc'
    }
  }));
  ctx.body = `<h1>添加商品：</h1> ${ctx.params.id}`
})

// 路由重定向
// router.redirect('/admin', '/user', 301);
router.redirect('/admin/test', '/user', 301);

// 把路由对象挂载到app对象中
app.use(router.routes());
app.use(itemRouter.routes());
app.use(goodsRouter.routes());

// 监听当前机器的地址，端口
app.listen(80)