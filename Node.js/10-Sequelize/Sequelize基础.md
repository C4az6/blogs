## Sequelize是什么？

![Sequelize](medias/logo-small-844fb9182c0fbf41931de2246fa9c496-1607689611218.png)

Sequelize 是一个基于 promise 的 Node.js [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping), 目前支持 [Postgres](https://en.wikipedia.org/wiki/PostgreSQL), [MySQL](https://en.wikipedia.org/wiki/MySQL), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQLite](https://en.wikipedia.org/wiki/SQLite) 以及 [Microsoft SQL Server](https://en.wikipedia.org/wiki/Microsoft_SQL_Server). 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。

Sequelize 遵从 [语义版本控制](http://semver.org/)。 支持 Node v10 及更高版本以便使用 ES6 功能。

说简单点sequelize就是帮助我们操作数据库的一个ORM（Object–relational mapping，对象关系映射）框架，我们使用mysql2操作数据库，要使用各种原生的sql语句去操作，功能简单还好说，功能复杂庞大就会显得很麻烦，繁琐，毕竟要写大量的原生sql语句，sequelize的出现帮助我们只需要通过对象的方式就可以完成数据库表创建、设计、数据的CRUD操作，简化开发、提高效率。

中文文档：<https://www.sequelize.com.cn/>



## 安装

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

## 连接到数据库

```js
const Sequelize = require('sequelize');
// 创建Sequelize的实例对象并配置连接信息
const sequelize = new Sequelize({
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'todos',
  dialect: 'mysql',
  timezone: 'Asia/Shanghai' //当我们向数据库中写入时间的时候，默认会根据系统当前所在时区进行设置
})
// 测试连接
sequelize.authenticate().then(_=>{
  console.log("数据库连接成功!");
}).catch(err=>{
  console.log("数据库连接失败! ", err);
})
```

new Sequelize options：
	host：主机，默认localhost
	port：端口，默认3306
	dialect：数据库类型，默认mysql，必填
	timezone：时区，影响数据库日期时间格式的值，格式：+08:00 或 字符串格式



## 什么是模型？

用来表述（描述）数据库表字段信息的对象，每一个模型对象表示数据库中的一个表，后续对数据库的操作都是通过对应的模型对象来完成的。

## 模型对象

### 创建模型对象

public define(modelName: String, attributes: Object, options: Object): Model

- modelName：模型名称，自定义
- attributes：模型中包含的数据，每一个数据映射对应表中的每一个字段
- options：模型（表）的设置

```js
  /**
   * 数据库连接完成以后，需要确定操作的表
   * 使用ORM，不需要通过sql来操作表，而是通过对象来操作
   * 给每一个要操作的表定义一个对象 - 模型 Model
   */
  const UserModel = sequelize.define('User', {
    // 描述表中对应的字段信息
    // 对象的key默认对应这表的column字段
    id: {
      // 每一个字段的信息
      type: Sequelize.INTEGER(10), // 整数类型
      allowNull: false, // 不允许为空
      primaryKey: true, // 设置为主键
      autoIncrement: true // 允许自增
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: 0
    },
    age: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: Sequelize.ENUM(['男', '女', '默认']), // 注意枚举类型为数组
      allowNull: false,
      defaultValue: '男'
    }
  }, {
    // 用来设置字段以外的其他信息
    timestamps: false,
    paranoid: false,
    freezeTableName: true,
    tableName: 'user',
    indexes: [{
      name: 'uname',
      fields: ['username']
    }, {
      name: 'age',
      fields: ['age']
    }]
  })
```

### attributes 设置

attributes是一个对象，里面包含了对应的表中的字段信息，key表示字段名称，值是字段的具体描述。

**字段值描述**

``` json
type：			字段类型，String|DataTypes
allowNull：		是否允许为空，默认为true
defaultValue：	默认值，默认为null
unique：			值唯一，默认为false
primaryKey：		是否为主键，默认为false
field：		    数据库中字段的实际名称
autoIncrement：	是否自增，默认false
get：		   字段的getter，函数
set：            字段的setter，函数
validate：       对象，对当前字段值发生改变的时候进行验证
```



### 模型额外配置

```json
timestamps：是否给每条记录添加 createdAt 和 updatedAt 字段，并在添加新数据和更新数据的时候自动设置这两个字段的值，默认为true

paranoid：设置 deletedAt 字段，当删除一条记录的时候，并不是真的销毁记录，而是通过该字段来标识，即保留数据，进行假删除，默认为false

freezeTableName：禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 默认为false

tableName：手动设置表的实际名称
```

### 定义表的索引

indexes：Array<Object>

```json
每个索引对象可以设置的值:
	name：索引名称，默认模型名称+字段
	fields: Array<string>，索引字段
	unique：唯一索引，默认false
```

增加索引的好处就是让数据库查询数据的时候变得更快。

## 模型实例对象

模型实例对象的概念很好理解，模型对象的作用是操作某张数据表，模型实例对象的作用是操作这张数据表中的数据。

一个模型类对应一个表，一个模型实例对象就是一条对应的表记录，通过操作这个对象来关联操作对应的表中的数据，操作模型类就是操作表，操作模型类对象就是操作该表中的某条记录。

模型类——表

模型实例——记录

> 注意在数据库中，我们通常会把记录称为数据，也会把数据称为记录，概念是一样的。

### 创建模型实例对象

public static build(options: Object): Model | Model[]

```json
options：一个对象，对应的就是表中的字段（模型中定义的属性），需要注意的是对该对象的操作不会立即反应到实际的数据库中，需要通过后续的操作进行同步
```

```js
  /**
   * 模型类 -> 表
   * 模型创建出来的对象 -> 表中某条记录
   */
  // let Kimoo = new UserModel();    //创建了一个User的记录

  let Kimoo = UserModel.build({    //和上面的new是一样的
      // 字段对应的值
      username: 'Kimoo',
      age: 30,
      gender: '男'
  });  

  // 通过new或者build出来的对象不会立即同步到数据库中，需要使用后续的一些方法来同步

  await Kimoo.save();
```

### 模型实例对象CRUD操作

模型实例对象.get(key: String)：获取某个属性（字段）的值。

模型对象.set(key: String, value: any)：设置某个属性（字段）的值。

模型对象.save()：验证该实例，如果通过验证，则持久化到数据库中。

模型对象.update(updates: Object)：updates：要更新的字段，调用该方法等同于调用.set()然后.save()。

模型对象.destroy()：销毁该实例（假删除或真删除）。

```js
  // 创建数据模型实例对象 c4az6
  // let c4az6 = UserModel.build({
  //   username: 'c4az6',
  //   age: 20,
  //   gender: '男'
  // })

  // 获取属性
  /* console.log(`
  username: ${c4az6.get('username')}
  age: ${c4az6.get('age')}
  gender: ${c4az6.get('gender')}
  `); */

  // 设置属性
  // let res = c4az6.set('age', 21);
  // console.log(res.dataValues);

  // 通过save方法同步数据到数据库中
  // await c4az6.save();

  // 更新字段数据
  let res = await UserModel.findById(17);
  console.log(res.dataValues);
  res.update({username: 'Alex'});

  let res2 = await UserModel.findById(18);
  res2.update({username: 'Elon', age: 40});
  console.log(res2.dataValues);
  // 销毁记录
  res2.destroy();
```

除了通过模型创建出来的实例对单条数据进行操作，也可以通过模型类对整个对应的表进行操作。

模型.findById(id: Number | String | Buffer)：根据主键搜索单条记录，注意是根据主键。

> findById这个API在6.x的版本中已经被替换为findByPk了

模型.findOne(options: Object)：根据条件搜索一条记录 options.where：搜索条件 Op操作。

模型.findOrCreate(options: Object)：搜索特定记录或创建它（如果没有对应记录）options.where：搜索条件。

模型.findAll(findOptions: Object)：在数据库中搜索多个记录，返回所有数据。

- findOptions.where：搜索条件
- findOptions.limit：记录条数限制
- findOptions.offset：记录偏移
- findOptions.order：记录排序方式

模型.findAndCountAll(findOptions: Object)：与findAll类似，但是返回值包含 count 属性，返回数据与总计数。

```js
  // 数据模型实例对象查询相关操作
  // findById
  // let user = await UserModel.findById(17);
  // console.log(user.dataValues);

  // findOne 返回一个对象
  // let res = await UserModel.findOne({
  //   where: {
  //     id: 17
  //   }
  // })
  // console.log(res.dataValues);
  
  // 搜索或创建特定记录，如果不存在则创建，返回数组
  // let res = await UserModel.findOrCreate({
  //   where: {
  //     id: 30,
  //     username: 'test'
  //   }
  // })
  // console.log(res[0].dataValues);

  // 搜索多个记录，返回数据和总记录数, 返回数组
  // 搜索年龄大于30的所有记录，这种对象嵌套对象的写法真恶心，一旦条件变多代码可读性会非常差
  // let res = await UserModel.findAll({
  //   where: {
  //     age: {
  //       [Op.gt]: 30
  //     }
  //   }
  // })
  // console.log(res.length);
  // res.map(item=>{console.log(item.dataValues)});

  // 与findAll一样，但是在返回所有数据的基础上添加了count统计总记录数的字段, 返回数组
  let res = await UserModel.findAndCountAll()
  console.log(res.count)
  res.rows.map(item=>{console.log(item.dataValues)});
```

**过滤查询（Sequelize.Op）**

跟多Op规则参考sequelize API文档：<https://sequelize.org/master/variable/index.html#static-variable-Op>

```js
  // 过滤查询
  // let res = await UserModel.findAll({
  //   where: {
  //     // 单条件过滤
  //     // username: 'Alex',
  //     // 多条件 要么年龄大于30，要么性别为女
  //     [Sequelize.Op.or]: [
  //       {
  //         age: {
  //           [Sequelize.Op.gt]: 30
  //         }
  //       },
  //       {
  //         gender: '女'
  //       }
  //     ]
  //   }
  // })
  // res.map(item=>{console.log(item.dataValues)});

  // limit 限制记录查询
  // let res = await UserModel.findAll({
  //   limit: 5
  // });
  // for(let i=0; i<res.length; i++) {
  //   console.log(res[i].dataValues);
  // }

  // 分页查询 limit配合offset一起使用
  // let res = await UserModel.findAll({
  //   limit: 5,
  //   offset: 5
  // });
  // console.log(res);
  // res.some(item=>console.log(item.dataValues))

  // 排序查询
  // 年龄按照降序规则来排序
  // let res = await UserModel.findAll({
  //   order: [['age', 'desc']]
  // });
  // res.forEach(item=>{console.log(item.dataValues)});

  // 返回总记录数
  // let res = await UserModel.count();
  // console.log(res);

  // 返回2条记录数和总记录数
  // let res = await UserModel.findAndCountAll({
  //   limit: 2
  // });
  // console.log(res.count);
  // res.rows.forEach(item=>{console.log(item.dataValues)});

  // 计算gender字段为男的年龄总和
  // let res = await UserModel.sum('age', {
  //   where: {
  //     gender: '男'
  //   }
  // });
  // console.log(res);
```

**关联查询**

1.首先给关联的字段定义外键关系

```json
references: {
	model: 关联的外键表，如User
	key: 关联的外键表的字段，如id
}
```

2. 在调用hasOne或hasMany等方法的时候，通过第二个参数设置对象：`{foreignKey: 当前关联表的字段,如uid}`
3. 在查询中使用 include 去设置关联的外键表模型，如：`include: [MessageModel]`

```js
  // 关联查询
  // 注意：创建模型的前提是你已经有建好了这张表
  const MessageModel = sequelize.define('message', {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    uid: { // 关联其他表的字段，把当前字段定义为外键
      type: Sequelize.INTEGER(10),
      defaultValue: 0,
      references: {
        model: UserModel,
        key: 'id'
      }
    },
    content: {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    timestamps: false,
    freezeTableName: true, // 冻结表名称
    tableName: 'message'
  })

  // Object.assign(data, {
  //   id: message.get('id'),
  //   uid: message.get('uid'),
  //   username: user.get('username'),
  //   age: user.get('age'),
  //   gender: user.get('gender'),
  //   content: message.get('content')
  // });
  // console.log(data);

  // MessageModel属于UserModel模型对象
  // MessageModel.belongsTo(UserModel, {
  // // 关联外键
  //   foreignKey: 'uid'
  // });

  // let data2 = await MessageModel.findById(1, {
  //  // 设置查询出来的数据包含UserModel数据
  //   include: [UserModel]
  // });
  // // console.log(data2);

  // console.log(`
  //   留言id：${data2.get('id')}
  //   留言人名称：${data2.User.username}
  //   留言内容：${data2.get('content')}
  // `);

  // 关联查询与预加载
  // 首先给关联的字段定义外键关系
  // UserModel包含MessageModel对象，hasMany表示包含多个
  UserModel.hasMany(MessageModel, {
    foreignKey: 'uid'
  });

  // 在查询中使用include去设置关联的外键表模型，如：include：[MessageModel]
  let data3 = await UserModel.findById(5, {
    include: [MessageModel]
  });

  data3.messages.map(item => console.log(item.dataValues));
```

