const {Sequelize, DataTypes} = require('sequelize');
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

/* const User = sequelize.define('User',{
  // 在这里定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认为 true
  }
}, {
  // 这是其他模型参数
  // freezeTableName: true   // 强制表名称等于模型名称 
  tableName: 'User'
}); */

sequelize.define('User', {
  // ... (属性)
}, {
  tableName: 'Employees'
});

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User); // true