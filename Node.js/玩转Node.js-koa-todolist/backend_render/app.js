const Koa = require('koa');
const StaticCache = require('koa-static-cache');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const fs = require('fs');

let todosDatas = JSON.parse(fs.readFileSync('./data/data.json'));
const app = new Koa();
app.use(StaticCache('./static', {
  prefix: '/static',
  gzip: true
}));

app.use(BodyParser());

const router = new Router();

// 查询todos列表数据API
router.get('/getTodoList', ctx => {
  ctx.body = {
    code: 1,
    data: todosDatas
  }
})

// 添加todos数据API
router.post('/add', ctx => {
  // 接收前端传递过来的title，然后将title写入todosDatas的data数组中
  let title = ctx.request.body.title || "";
  if (!title.trim()) {
    ctx.body = {
      code: 0,
      data: 'title不能为空'
    }
    return
  }
  todosDatas._id++;
  todosDatas.data.push({
    title,
    done: false
  });
  ctx.body = {
    code: 1,
    data: '添加成功'
  }
  fs.writeFileSync('./data/data.json', JSON.stringify(todosDatas));

})

// 删除todos数据API
router.post('/remove', ctx => {
  let title = ctx.request.body.title || "";
  if (!title.tirm()) {
    ctx.body = {
      code: 0,
      data: '删除失败!'
    }
    return
  }
  todosDatas._id--;
  todosDatas.data = todosDatas.data.filter(item => item.title !== title);
  ctx.body = {
    code: 1,
    data: '删除成功!'
  }
  fs.writeFileSync('./data/data.json', JSON.stringify(todosDatas));

})

// 修改todos任务状态API
router.post('/modifyStatus', ctx => {
  let {
    title,
    done
  } = ctx.request.body || "";
  console.log(ctx.request.body);
  if (!title) {
    ctx.body = {
      code: 0,
      data: '修改任务状态失败!'
    }
    return
  }
  todosDatas.data.forEach(item => {
    // if(item.title === title) {
    //   item.done = done
    // }
    (item.title === title) && (item.done = done);
  })
  ctx.body = {
    code: 1,
    data: todosDatas.data
  }
  fs.writeFileSync('./data/data.json', JSON.stringify(todosDatas));
})

app.use(router.routes());

app.listen(80, () => {
  console.log("server is running at: 0.0.0.0:80");
});