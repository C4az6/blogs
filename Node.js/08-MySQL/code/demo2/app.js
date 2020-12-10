const bodyParser = require('koa-bodyparser');

(async function () {
  const Koa = require('koa');
  const KoaStaticCache = require('koa-static-cache');
  const Router = require('koa-router');
  const BodyParser = require('koa-bodyparser');
  const mysql = require('mysql2/promise');
  const fs = require('fs');

  /** 创建数据库的连接实例对象，注意要使用await来等待异步连接操作
   * mysql.createConnection({
   *  1. host：数据库主机地址
   *  2. user：数据库的用户名
   *  3. password：数据库的密码
   *  4. database:：要使用的数据库
   * })
   */
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'todos'
  })

  // 初始化Koa实例对象 app
  const app = new Koa();

  // 使用KoaStaticCache中间件托管静态资源
  app.use(KoaStaticCache('./static', {
    prefix: '/public',
    gzip: true
  }));

  // 使用BodyParser中间件处理请求正文数据,解析之后会自动挂载到ctx.request.body
  app.use(BodyParser());

  // 初始化路由的实例对象
  const router = new Router();

  /**
   * 开始编写路由
   */

  // 访问/的路由
  router.get('/', async ctx=>{
    ctx.body = await fs.readFileSync('./static/index.html').toString();
  })

  // 获取Todos列表数据 API
  router.get('/getList', async ctx => {
    // 查询数据库
    let sql = 'select * from todos where status=1 limit 5';
    const [todosList] = await connection.query(sql);
    // 前后端约定：code为0 表示正确，不为0则表示错误
    ctx.body = {
      code: 0,
      data: todosList
    };
  })

  // 添加任务 API
  router.post('/add', async ctx => {
    console.log(ctx.request.body);
    let {
      title
    } = ctx.request.body || "";
    if (!title.trim()) {
      ctx.body = {
        code: 1,
        data: '任务标题不能为空'
      }
      return
    }
    let sql = `INSERT INTO todos (title, done) VALUES ('${title}', 0)`;
    let [res] = await connection.query(sql);
    if (res.affectedRows > 0) {
      // 插入成功
      ctx.body = {
        code: 0,
        data: '添加成功'
      }
    } else {
      ctx.body = {
        code: 2,
        data: '添加失败'
      }
    }
  })

  // 删除任务 API
  router.post('/remove', async ctx => {
    console.log(ctx.request.body);
    let {
      id
    } = ctx.request.body;
    // let sql = `DELETE FROM todos WHERE id=${id}`;  DELETE太危险了,别这么干
    let sql = `UPDATE todos SET status=0 WHERE id=${id}`
    let [res] = await connection.query(sql);
    if (res.affectedRows > 0) {
      // 删除成功
      ctx.body = {
        code: 0,
        data: '删除成功'
      }
    } else {
      // 删除失败
      ctx.body = {
        code: 1,
        data: '删除失败'
      }
    }
  })

  // 修改任务状态
  router.post('/change', async ctx => {
    let {
      id,
      done
    } = ctx.request.body;
    console.log(ctx.request.body);
    let sql = `UPDATE todos SET done=${done} WHERE id=${id}`;
    let [res] = await connection.query(sql);
    if (res.affectedRows > 0) {
      // 更新成功
      ctx.body = {
        code: 0,
        data: '更新成功'
      }
    } else {
      // 更新失败
      ctx.body = {
        code: 1,
        data: '更新失败'
      }
    }
  })


  // app中挂载路由系统
  app.use(router.routes());

  app.listen(8888, () => {
    console.log("[+] koa server is listening 0.0.0.0:8888");
  })
})()