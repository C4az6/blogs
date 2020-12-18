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
  let user = await UserModel.findById(1);
  console.log(user.dataValues);
  user.set('age', 39);
  await user.save();
  // update == set + save
  // await user.update({age: '32'});
  // await user.update({username: 'alex'});
  user.destroy();
})()