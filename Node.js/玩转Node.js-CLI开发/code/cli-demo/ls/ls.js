/**
 * ls
 * 输出当前运行命令所在的目录下的文件和文件夹
 * ls d:\
 * 我们还可以指定要显示的目录
 */

// 加载commander和fs模块
const commander = require('commander');
const fs = require('fs');

// 设置当前命令工具的版本
commander.version('v1.0.0', '-v, --version');

// 设置命令选项 默认值是当前目录
commander.option('-p, --path [path]', '设置要显示的目录', __dirname);

// 以列表的形式显示，如果选项不接受用户输入的值，那么这个选项将以boolean的形式提供给后面命令使用
commander.option('-l, --list', '以列表的形式显示');

// 实现命令的具体逻辑
commander.action(() => {
  // option中的变量会挂载到当前commander
  // console.log(commander.path);
  // console.log(commander.list);
  try {
    // 读取用户输入的目录
    const files = fs.readdirSync(commander.path);
    if (commander.list) {
      // 用户输入了-l，以列表的方式展示
      let output = files.map(item => {
        // 文件的拓展信息，除了文件内容以外的信息
        let stat = fs.statSync(commander.path + '/' + item);
        // 根据isDirectory()显示不同的文件类型
        let type = stat.isDirectory() ? '目录' : '文件';
        return `[${type}]   ${item}\r\n`;
      }).join('');
      console.log(output);
    } else {
      console.log(files);
    }
  } catch (error) {
    console.log(error);
  }
})

commander.parse(process.argv);