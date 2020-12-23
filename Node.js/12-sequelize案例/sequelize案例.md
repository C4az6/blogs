## 数据表

用户表、内容表、评论表、点赞表



## 项目初始化

创建一个`app`文件夹、在app文件夹下面创建server和client文件夹，然后在app文件夹路径下运行下面命令。

```shell
# 安装必要的包
npm sequelize-cli sequelize mysql2 @vue/cli

# cd到server目录后初始化sequelize项目
../node_modules/.bin/sequelize init
```

在`config.json`配置文件中增加时区配置。

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": "+08:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```



## 创建模型



## 创建索引，username值不能唯一



## 通过seeder种子文件创建测试数据



## MD5无法解密



包版本不同坑死人，学习的时候4.x，最新的是6.x，很多API变动，语法变动坑死人，所以建议学习的时候严格按照指定版本安装学习，学习后再使用最新版本实现一遍。



## Model中配置多表查询



