## Sequelize是什么？

![Sequelize](medias/logo-small-844fb9182c0fbf41931de2246fa9c496-1607689611218.png)

Sequelize 是一个基于 promise 的 Node.js [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping), 目前支持 [Postgres](https://en.wikipedia.org/wiki/PostgreSQL), [MySQL](https://en.wikipedia.org/wiki/MySQL), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQLite](https://en.wikipedia.org/wiki/SQLite) 以及 [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server). 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。

Sequelize 遵从 [语义版本控制](http://semver.org/)。 支持 Node v10 及更高版本以便使用 ES6 功能。

说简单点sequelize就是帮助我们操作数据库的一个ORM（Object–relational mapping，对象关系映射）框架，我们使用mysql2操作数据库，要使用各种原生的sql语句去操作，功能简单还好说，功能复杂庞大就会显得很麻烦，繁琐，毕竟要写大量的原生sql语句，sequelize的出现帮助我们只需要通过对象的方式就可以完成数据库表创建、设计、数据的CRUD操作，简化开发、提高效率。

中文文档：<https://www.sequelize.com.cn/>

## 入门

### 安装

Sequelize 的使用可以通过 [npm](https://www.npmjs.com/package/sequelize) (或 [yarn](https://yarnpkg.com/package/sequelize)).

```shell
npm install --save sequelize
```

你还必须手动为所选数据库安装驱动程序：

```shell
# 选择以下之一:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

因为我们要操作的是mysql，所以这个地方我们选择mysql2。

### 连接到数据库

```js
const Sequelize = require('sequelize');
// 创建Sequelize的实例对象并配置连接信息
const sequelize = new Sequelize({
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'todos',
  dialect: 'mysql'
})
// 测试连接
sequelize.authenticate().then(_=>{
  console.log("数据库连接成功!");
}).catch(err=>{
  console.log("数据库连接失败! ", err);
})
```



## 模型











## 相关文献

<https://www.sequelize.com.cn/core-concepts/getting-started>

<https://segmentfault.com/a/1190000003987871>

