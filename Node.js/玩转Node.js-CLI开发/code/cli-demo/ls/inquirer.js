const inquirer = require('inquirer');

// 提问用户，与用户进行命令行的交互
// prompt数组中存放一个指定格式的对象，我们称之为question对象
inquirer.prompt([{
    type: 'input',
    name: 'username',
    message: 'please input your project name',
    default: 'app',
    // 对用户输入的数据或选择的数据进行验证
    validate(val) {
      if (val.trim() === "") {
        return 'project name can not be empty'
      }
      return true;
    },
    // 对用户输入的数据或选择的数据进行过滤
    filter(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'confirm',
    name: 'useEs6',
    message: '是否启用ES6支持',
    default: true
  },
  {
    type: 'list',
    name: 'framework',
    message: '请选择后端框架',
    choices: ['Express.js', 'Koa2.js', 'Egg.js'],
    default: 0
  },
  {
    type: 'rawlist',
    name: 'framework2',
    message: '请选择前端框架',
    choices: ['Vue', 'React', 'Angular'],
    default: 1
  },
  {
    type: 'checkbox',
    name: 'tools',
    message: '开发工具',
    choices: [{
        name: '使用ESLint',
        value: 'eslint',
        checked: true
      },
      {
        name: '使用mocha单元测试',
        value: 'mocha'
      },
      {
        name: '使用axios发起http请求',
        value: 'axios'
      },
      {
        name: '使用vue-router',
        value: 'vue-router'
      },
      {
        name: '使用vuex进行状态管理',
        value: 'vuex'
      }
    ]
  }
]).then(res => {
  console.log(res);
})