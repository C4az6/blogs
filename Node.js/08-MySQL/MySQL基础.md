## 数据库简介

数据库(Database)是按照数据结构来组织、存储和管理数据的仓库。

为什么需要用到数据库？我们之前写服务端的时候，数据都是存储在本地文件中做持久化存储的，对于少量的数据还可以，读写速度也能接收，但是一旦数据量大起来，读文件的操作将会非常慢，读了文件之后还要对文件中的信息进行检索，这样就显得非常低效，查询一个数据要等待几十秒甚至上百秒这显然是不能接受的，这时就需要使用数据了系统才存储数据了，那有人问为什么数据库存数据就比使用文件存储数据查询速度要快呢？因为数据库系统里面使用了很多数据结构和算法来优化检索，这是文件没法比拟的。

数据以表格的形式出现，表格中每一行表示一组数据，表格中每一列表示某组数据对应的字段（属性），若干这样的行和列就组成了一张表，若干个表格组成一个库。

MySQL 服务就是维护了若干个这样的库。



## 数据库安装

官网：https://www.mysql.com/

下载：https://dev.mysql.com/downloads/mysql/

集成了MySQL的第三方工具：XAMPP、PHPstudy



## SQL语句

### 查询数据

#### 排序查询

#### 数量限制查询

SELECT column_name,column_name FROM table_name [LIMIT N]

N：数字，要限制的查询数据的最大条数

```sql
select id,done,title from todos where status=1 limit 5
```

### 查询与偏移





#### 分页查询



### 添加数据



### 更新数据



### 删除数据

> 不推荐使用删除操作，太危险了，一旦删错数据会很麻烦，建议使用update更新数据的状态来实现删除的效果；
>
> 例如把要删除的数据的status改变成0，查询的时候直接查询status非0的数据即可。







## 待解决的BUG

![1607597595288](medias/1607597595288.png)

服务跑一会就会自动挂掉，然后就得重启才行，莫名其妙。



## 补充

### koa-body-parser到底是什么?

一个用来解析请求数据的中间件，koa中设置了bodyparser之后会自动挂载到ctx.request.body中。



### Normalize.css

一个CSS样式重置的库，兼容其他浏览器，非常好用。

官方文档：<http://nicolasgallagher.com/about-normalize-css/>

中文翻译文档：<https://jerryzou.com/posts/aboutNormalizeCss/>

项目地址：<https://github.com/necolas/normalize.css/>



