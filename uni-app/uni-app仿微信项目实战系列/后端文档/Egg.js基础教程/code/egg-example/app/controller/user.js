'use strict';

const Controller = require('egg').Controller;
/* let demo = [
  {
    id: 1,
    username: 'alex',
    nickname: '昵称',
    gender: '男'
  },
  {
    id: 2,
    username: 'jack',
    nickname: '昵称',
    gender: '男'
  },
  {
    id: 3,
    username: 'rose',
    nickname: '昵称',
    gender: '男'
  },  
  {
    id: 4,
    username: 'alexander',
    nickname: '昵称',
    gender: '男'
  }
] */
class UserController extends Controller {
  // 用户列表
  async index() {
    let result = [];
    // 计算分页
    let page = this.ctx.query.page ? parseInt(this.ctx.query.page) : 1;
    let limit = 5; // 每页记录数
    let offset = (page - 1) * 5; // 偏移值 = （每页记录数 - 1）* 5
    // 查询全部数据
    // result = await this.app.model.User.findAll();
    // 查询多个并计数
    // result = await this.app.model.User.findAndCountAll();
    result = await this.app.model.User.findAll({
      // attributes: ['id', 'username', 'sex'],
      attributes: {
        // 排除
        exclude: ['password']
      },
      order: [
        ['updated_at', 'DESC'],
        ['id', 'DESC']
      ],
      offset,
      limit
    })

    this.ctx.body = {
      msg: "ok",
      data: result
    }
  }

  // 获取指定的用户
  async read() {
    let id = parseInt(this.ctx.params.id)
    // 通过主键查询单个用户数据
    // let detail = await this.app.model.User.findByPk(id);
    // 通过条件查找
    let detail = await this.app.model.User.findOne({
      where: {
        id,
        sex: '女'
      }
    });
    if (!detail) {
      return this.ctx.body = {
        msg: "fail",
        data: "用户不存在"
      }
    }
    this.ctx.body = {
      msg: "ok",
      data: detail
    }
  }

  // 创建用户
  async create() {
    // 参数验证
    // 写入数据库

    // 新增单个
    /*     let res = await this.app.model.User.create({
          username: "rose",
          password: "admin.12345",
          sex: "女"
        }) */

    // 批量新增
    let res = await this.app.model.User.bulkCreate([{
        username: `robot1`,
        password: "123456",
        sex: "男"
      },
      {
        username: "robot2",
        password: "123456",
        sex: "男"
      },
      {
        username: "robot3",
        password: "123456",
        sex: "男"
      },
      {
        username: "robot4",
        password: "123456",
        sex: "男"
      },
      {
        username: "alice",
        password: "123456",
        sex: "女"
      },
      {
        username: "alice2",
        password: "123456",
        sex: "女"
      },
      {
        username: "alice3",
        password: "123456",
        sex: "女"
      }, {
        username: "alice4",
        password: "123456",
        sex: "女"
      }
    ])
    this.ctx.body = res
  }

  // 修改用户信息
  async update() {
    let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0
    // 拿到这条记录且判断是否存在
    let data = await this.app.model.User.findByPk(id);
    if (!data) {
      return this.ctx.body = {
        msg: "fail",
        data: "该记录不存在"
      }
    }

    // 拿到 post 请求传递过来的参数
    let params = this.ctx.request.body
    console.log("params: ", params)
    let res = await data.update(params, {
      // 限制更新数据的字段，只更新 username，其他字段不更新
      fields: ['username', 'sex']
    });
    this.ctx.body = {
      msg: "ok",
      data: res
    }
  }

  // 删除用户数据
  async destroy() {
    // let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0
    // let data = await this.app.model.User.findByPk(id)
    // if (!data) {
    //   return this.ctx.body = {
    //     msg: 'fail',
    //     data: '记录不存在'
    //   }
    // }
    // // 删除用户信息
    // let res = await data.destroy()
    let {Op} = this.app.model.Sequelize;
    let res = await this.app.model.User.destroy({
      where: {
        id: {
          // 删除 id 大于等于 34 的记录
          [Op.gte]: 34
        }
      }
    })
    this.ctx.body = {
      msg: 'ok',
      data: res
    }
  }
}

module.exports = UserController;