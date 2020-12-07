## 数据库简介

数据库(Database)是按照数据结构来组织、存储和管理数据的仓库。

为什么需要用到数据库？我们之前写服务端的时候，数据都是存储在本地文件中做持久化存储的，对于少量的数据还可以，读写速度也能接收，但是一旦数据量大起来，读文件的操作将会非常慢，读了文件之后还要对文件中的信息进行检索，这样就显得非常低效，查询一个数据要等待几十秒甚至上百秒这显然是不能接受的，这时就需要使用数据了系统才存储数据了，那有人问为什么数据库存数据就比使用文件存储数据查询速度要快呢？因为数据库系统里面使用了很多数据结构和算法来优化检索，这是文件没法比拟的。

数据以表格的形式出现，表格中每一行表示一组数据，表格中每一列表示某组数据对应的字段（属性），若干这样的行和列就组成了一张表，若干个表格组成一个库。

MySQL 服务就是维护了若干个这样的库。



## 数据库安装

官网：https://www.mysql.com/

下载：https://dev.mysql.com/downloads/mysql/

集成了MySQL的第三方工具：XAMPP、PHPstudy



## 基础SQL语句

```
mysql -uroot -p密码		// 连接数据库

show databases;			 // 查看所有数据库

use 数据库名;			 // 选择要操作的数据库

create database 数据库名;		// 创建新的数据库

insert into 表名 (字段1，字段2,...字段N) values (值1，值2,...值N);  // 插入数据,注意如果值为字符串类型则必须使用单引号或者双引号进行包裹


```



## Node.js中使用MySQL

在node.js中我们可以使用mysql2这个模块来操作数据库。

### 参考代码

```js
(async function () {
  const mysql = require('mysql2/promise');

  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'miaov'
  });

  /**
   * arr返回一个数组，第一个数组是记录的值，第二个数组是记录中包含的字段的信息
   */
  // let arr = await connection.query('select * from users');
  // console.log(arr);

  // 数组的解构操作，解构数组中的第一项
  let [users] = await connection.query("select * from users");
  console.log(users);

  users.forEach(item => {
    console.log(item);
  })
})()
```

我们使用的时候之所以要包装一层自调用函数，这是因为这里使用的是promise版本的mysql2，我们需要使用async/await来等待异步操作，所以我们需要套一层函数并在函数前面加上`async`关键字。



## todos案例

### 参考代码

`app.js`

```js
const { create } = require('domain');

(async function(){
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

  const router = new Router();
  router.get('/', async ctx=>{
    ctx.body = await fs.readFileSync('./static/index.html').toString();
  })

  router.get('/getList', async ctx=>{
    const [res] = await connection.query('select * from todos');
    console.log(res);
    ctx.body = res;
  })

  router.post('/add', async ctx=> {
    let {title} = ctx.request.body || "";
    console.log(title);
    if(!title.trim()) {
      // 为空的情况
      ctx.body = {code: 0, data: 'title不能为空!'}
    }else {
      const [res] = await connection.query(`insert into todos (title, done) values ('${title}', 0)`)
      console.log(res);
      ctx.body = {code:1 , data: '添加数据成功!'}
    }
  })
  
  app.use(router.routes());

  app.listen(80, ()=>{
    console.log("koa server listen: 0.0.0.0:80")
  })

})()
```

`/static/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.staticfile.org/vue/2.2.2/vue.min.js"></script>
</head>
<body>
  <h1>Todos</h1>
  <hr />
  <div id="app">
    <input type="text" placeholder="请输入任务..." v-model="taskValue">
    <input type="button" value="添加" @click="handleAddTask">
    <ul>
      <li v-for="(item, index) in list">
        <span>{{item.id}}</span>
        <span>{{item.title}}</span>
        <button>删除</button>
      </li>
    </ul>
  </div>

  <script>
    new Vue({
      el: '#app',
      data: {
        list: [],
        taskValue: ""
      },
      methods: {
        // 获取todos列表数据
        getList(){
          fetch('/getList').then(res=>res.json())
          .then(response=>{
            this.list = response;
            console.log(this.list)
          })
        },
        // 监听添加todos任务事件
        handleAddTask(){
          console.log(this.taskValue);
          if(!this.taskValue.trim()) {
            alert('任务标题不能为空!');
          }else {
            fetch('/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({title: this.taskValue})
            }).then(res=>res.json())
            .then(response=>{
              console.log(response);
              if(response.code) {
                this.taskValue = "";
                this.getList();
              }
            })
          }
        }
      },
      created(){
        console.log("created...");
        this.getList();
      }
    })
  </script>
</body>
</html>
```



