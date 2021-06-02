'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    const {ctx} = this;
    ctx.body = {
      msg: 'ok',
      result: [
        {
          name: 'razer 黑寡妇竞技X',
          price: 319
        },
        {
          name: 'ikbc c87',
          price: 299.99
        },
        {
          name: '黑爵机械键盘',
          price: 129.99
        }
      ]
    }
  }
}

module.exports = HomeController;
