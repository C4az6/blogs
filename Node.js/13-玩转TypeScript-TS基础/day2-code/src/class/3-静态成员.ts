// 单例模式demo

// class Mysql {
//   // 成员属性声明, 默认public
//   host: string;
//   port: number;
//   username: string;
//   password: string;
//   dbname: string;

//   constructor(host = '127.0.0.1', port = 3306, username='root', password='', dbname='') {
//     this.host = host;
//     this.port = port;
//     this.username = username;
//     this.password = password;
//     this.dbname = dbname;
//   }

//   // 类方法
//   query(){console.log("query data...")}
//   insert(){console.log("insert data...")}
//   update(){console.log("update data...")}
// }

// /**
//  * 创建一个Mysql对象，通过这个对象来操作数据库
//  * 如果我们不加以限制的话，这个Mysql是可以new出来多个对象的
//  * 每一个Mysql都会占用资源（内存）
//  * 
//  * 为了解决这个问题，我们需要对创建Mysql连接做限制，如果存在则直接使用已有的连接，不存在
//  * 则创建。
//  */

//  let db = new Mysql();
//  db.query();
//  db.insert();

//  let db1 = new Mysql();
//  db1.query();
//  db1.insert();


/**
 * 通过某种方式控制系统同时只有一个Mysql的对象在工作
 */

class Mysql {
  // 静态属性，不需要通过new出来的对象，直接是通过Mysql类来访问
  public static instance;
  host: string;
  port: number;
  username: string;
  password: string;
  dbname: string;
  private constructor(host = '127.0.0.1', port = 3306, username = 'root', password = '', dbname = '') {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.dbname = dbname;
  }
  public static getInstance() {
    if (!Mysql.instance) {
      Mysql.instance = new Mysql();
    }
    return Mysql.instance;
  }
  query() { console.log("query data...") }
  insert() { console.log("insert data...") }
  update() { console.log("update data...") }
}

// let db = new Mysql();
console.log(Mysql.instance);
let db = Mysql.getInstance();
db.query();
console.log(Mysql.instance);
db.insert();
db.update();