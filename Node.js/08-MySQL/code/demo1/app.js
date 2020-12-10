(async function () {
  const Koa = require('koa');
  const Static = require('koa-static-cache');
  const Router = require('koa-router');
  const BodyParser = require('koa-bodyparser');
  const Mysql = require('mysql2/promise');
  const fs = require('fs');

  const app = new Koa()
  // 创建数据库连接
  const connection = await Mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'todos'
  })

  // 使用bodyParser处理正文数据
  app.use(BodyParser())

  // 托管静态资源
  app.use(Static('./static', {
    prefix: '/public',
    gzip: true
  }))

  // 创建Router的实例对象
  const router = new Router();
  router.get('/', async ctx => {
    ctx.body = fs.readFileSync('./static/index.html').toString();
  })

  router.get('/getList', async ctx => {
    // 查询数据库是一个异步操作，因此需要使用await进行等待查询结果
    const [res] = await connection.query('select * from todos');
    console.log(res);
    ctx.body = res;
  })

  router.post('/add', async ctx => {
    let {
      title
    } = ctx.request.body || "";
    console.log(title);
    if (!title.trim()) {
      // 为空的情况
      ctx.body = {
        code: 0,
        data: 'title不能为空!'
      }
    } else {
      const [res] = await connection.query(`insert into todos (title, done) values ('${title}', 0)`)
      console.log(res);
      ctx.body = {
        code: 1,
        data: '添加数据成功!'
      }
    }
  })

  app.use(router.routes());

  app.listen(80, () => {
    console.log("koa server listen: 0.0.0.0:80")
  })

})()