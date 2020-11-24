const fs = require("fs");
const commander = require("commander");
// 引入美化命令行模块
const chalk = require("chalk");

// 设置当前cli的版本
commander.version('v1.0.0', '-v, --version');

// 设置命令选项，默认值是当前目录
commander.option('-p, --path [path]', '设置要显示的目录', __dirname);

// 以列表的形式显示
commander.option('-l, --list', '以列表的形式显示');

// 编写命令具体逻辑
commander.action(()=>{
  try {
    // 显示用户输入的路径下的所有文件和目录
    const files = fs.readdirSync(commander.path);
    if(commander.list) {
      let output = files.map(item=>{
        let stat = fs.statSync(commander.path + '/' + item);
        return stat.isDirectory() ? chalk.greenBright.bgBlack.bold(`[目录]   ${item}\r\n`) : `[文件]   ${item}\r\n`;
      }).join('');
      console.log(output);
    }else {
      console.log(files);
    }
  } catch (error) {
    console.log(error)
  }
})

commander.parse(process.argv);