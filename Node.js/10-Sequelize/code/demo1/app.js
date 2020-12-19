(async function () {
  const Sequelize = require('sequelize');

  // 创建Sequelize的实例对象并配置连接信息
  const sequelize = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    database: 'mysql_demo01',
    dialect: 'mysql'
  })

  // 测试连接
  sequelize.authenticate().then(_ => {
    console.log('[+] mysql connection succes!');
  }).catch(err => {
    console.log("[-] mysql connection error!", err);
  })

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

  /**
   * 模型类 -> 表
   * 模型创建出来的对象 -> 表中某条记录
   */
  // let Kimoo = new UserModel();    //创建了一个User的记录

  // let Kimoo = UserModel.build({
  //     // 字段对应的值
  //     username: 'Kimoo',
  //     age: 30,
  //     gender: '男'
  // });  //和上面的new是一样的

  // 通过new或者build出来的对象不会立即同步到数据库中，需要使用后续的一些方法来同步

  // console.log(Kimoo);
  // await Kimoo.save();
  // console.log(Kimoo);

  // let Kimoo = await UserModel.findByPk(6);
  // console.log(Kimoo.dataValues);
  
  // 修改
  // let user = await UserModel.findById(1);
  // console.log(user.dataValues);
  // user.set('age', 39);
  // await user.save();
  // update == set + save
  // await user.update({age: '32'});
  // await user.update({username: 'alex'});
  // user.destroy();



  // 基于UserModel模型对象创建数据
  // let Jack = UserModel.build({
  //   username: 'Jack',
  //   age: 20
  // });
  // await Jack.save();
  // Jack.save();

  // let Rachel = UserModel.build({
  //   username: 'Rachel',
  //   age: 27,
  //   gender: '女'
  // });
  // await Rachel.save();

  // 查找一个 返回一个Object
  // let res = await UserModel.findOne({
  //   where: {
  //     username: 'Rachel'
  //   }
  // });
  // console.log(res.dataValues);

  // 查找全部 返回一个数组
  // let res = await UserModel.findAll();
  // console.log(res.length);
  // res.forEach(item=>{
  //   console.log(item.dataValues);
  // })

  // 带条件查询所有数据
  // let res = await UserModel.findAll({
  //   where: {
  //     // 单条件
  //     // username: 'Jack'
      
  //     // 多条件
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
  // res.map(item=>console.log(item.dataValues));

  // 查询2条数据
  // let res = await UserModel.findAll({
  //   limit: 2
  // })
  // res.filter(item=>console.log(item.dataValues));

  // 查询偏移值为1的所有数据
  // let res = await UserModel.findAll({
  //   offset: 1
  // });
  // console.log(res);
  // res.map(item=>{
  //   console.log(item.dataValues);
  // })

  // 查询偏移值为1的2条数据
  // let res = await UserModel.findAll({
  //   limit: 2,
  //   offset: 1
  // });
  // res.map(item=>{
  //   console.log(item.dataValues);
  // })

  // 根据降序规则查询所有记录数
  // let res = await UserModel.findAll({
  //   order: [
  //     ['age', 'DESC']
  //   ]
  // });
  // res.map(item=>{
  //   console.log(item.dataValues);
  // })

  // console.log(res.map(r=>r.get('username')));

  // 返回总记录数
  // let res = await UserModel.count();
  // console.log(res);

  // 返回2条记录数和总记录数
  // let res = await UserModel.findAndCountAll({
  //   limit: 2
  // });
  // console.log(res.count);

  // 计算gender字段为男的年龄的总和
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
    uid: {  // 关联其他表的字段，把当前字段定义为外键
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
    freezeTableName: true,    // 冻结表名称
    tableName: 'message'
  })


  // 获取某条留言的所有信息，就是留言本身的数据 + 该留言的用户数据
  // let data = {};

  // let message = await MessageModel.findById(3);
  // let user = await UserModel.findById(message.get('uid'));

  // Object.assign(data, {
  //   id: message.get('id'),
  //   uid: message.get('uid'),
  //   username: user.get('username'),
  //   age: user.get('age'),
  //   gender: user.get('gender'),
  //   content: message.get('content')
  // });
  // console.log(data);

  // MessageModel.belongsTo(UserModel, {
  //   foreignKey: 'uid'
  // });

  // let data2 = await MessageModel.findById(1, {
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
  UserModel.hasMany(MessageModel, {
    foreignKey: 'uid'
  });

  // 在查询中使用include去设置关联的外键表模型，如：include：[MessageModel]
  let data3 = await UserModel.findById(5, {
    include: [MessageModel]
  });

  data3.messages.map(item=>console.log(item.dataValues));
})()

