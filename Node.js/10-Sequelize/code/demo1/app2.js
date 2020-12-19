const {
  Op
} = require('sequelize');

(async function () {
  const Sequelize = require('sequelize');

  // 配置sequelize数据库连接
  const sequelize = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    database: 'mysql_demo01',
    dialect: 'mysql'
  })

  // 测试数据库是否连接成功
  sequelize.authenticate().then(_ => {
    console.log("[+] 数据库连接成功!");
  }).catch(error => {
    console.log("[-] 数据库连接失败!", error);
  })

  // 创建数据模型
  const UserModel = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    age: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: Sequelize.ENUM(['男', '女', '默认']),
      allowNull: false,
      defaultValue: '男'
    }
  }, {
    // 设置字段以外的信息
    timestamps: false,
    paranoid: false,
    freezeTableName: 'user',
    indexes: [{
      name: 'uname',
      fields: ['username']
    }, {
      name: 'age',
      fields: ['age']
    }]
  })

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
  // let res = await UserModel.findById(17);
  // console.log(res.dataValues);
  // res.update({username: 'Alex'});

  // let res2 = await UserModel.findById(18);
  // res2.update({username: 'Elon', age: 40});
  // console.log(res2.dataValues);
  // // 销毁记录
  // res2.destroy();

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
  // let res = await UserModel.findAndCountAll()
  // console.log(res.count)
  // res.rows.map(item=>{console.log(item.dataValues)});


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
})()