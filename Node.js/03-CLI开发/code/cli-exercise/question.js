/**
 * 个人问卷调查
 * 功能：
 *    1.姓名、用户输入、必填
 *    2.性别、用户选择、男女、默认男
 *    3.年龄、用户输入、必填
 *    4.手机号、用户输入、必填、作校验，必须符合正常的手机号格式
 *    5.常用框架、[jQuery,ex4.js,Vue,React,Angular]
 *    7.将信息写入脚本同目录下的log.txt
 */

const commander = require('commander');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    type: 'input',
    name: 'username',
    message: '请输入你的姓名,请确保英文字符为小写',
    // 对用户输入的数据进行验证
    validate(val) {
      if (val.trim() === "") {
        return '姓名不能为空!'
      }
      return true; // 代表验证通过
    },
    filter(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'rawlist',
    name: 'gender',
    message: '请选择你的性别',
    choices: ['男', '女'],
    default: 0
  },
  {
    type: 'input',
    name: 'age',
    message: '请输入年龄',
    validate(val) {
      if (val.trim() === "") {
        return '年龄不能为空'
      }
      return true;
    }
  },
  {
    type: 'input',
    name: '手机号',
    message: '请输入手机号',
    validate(val) {
      console.log("phone number: ", val);
      let re = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
      if (!re.test(val)) {
        return '请输入合法的手机号!'
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'framework',
    message: '请选择你最熟悉的框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 1
  },
  {
    type: 'confirm',
    name: 'saveFile',
    message: '是否保存信息到本地',
    default: true
  },
]).then(res => {
  console.log(res);
  if (res.saveFile) {
    try {
      fs.writeFileSync(__dirname + '/logs/question' + Math.ceil(Math.random() * 100000000) + 'log.txt', JSON.stringify(res));
    } catch (error) {
      console.log(error)
    }
  }
})