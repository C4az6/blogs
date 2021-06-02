'use strict';

const Controller = require('egg').Controller;
let demo = [
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
]
class UserController extends Controller {
  // 用户列表
  async index() {
    // 响应
    this.ctx.body = {
      msg: 'ok',
      data: demo
    }
  }

  // 获取指定的用户
  async read() {
    // 获取url参数id的值
    let id = this.ctx.params.id;
    let res = demo.find(item=>item.id == id)
    this.ctx.body = {
      msg: 'ok',
      data: res
    }
  }

  // 创建用户
  async create() {
    let data = this.ctx.request.body
    console.log("user create info: ", data)
    this.ctx.body = {
      msg: 'ok',
      data: {
        username: '用户名',
        password: '密码'
      }
    }
  }
}

module.exports = UserController;
