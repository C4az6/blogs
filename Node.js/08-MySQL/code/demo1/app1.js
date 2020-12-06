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