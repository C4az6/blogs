/**
 * ls
 * 输出当前命令所在的目录下的文件和文件夹
 * ls d:\
 * 我们还可以指定要显示的目录
 */

// 加载commander模块
const commander = require('commander');
// 加载fs模块
const fs = require('fs');

// 设置当前命令工具的版本
commander.version('v1.0.0', '-v, --version');

// 设置命令选项
commander.option('-p, --path [path]', '设置要显示的目录', __dirname);

commander.option('-l, --list', '设置要显示的目录', '以列表的形式显示');

// 实现命令的具体逻辑
commander.action( () => {    // 这里的path参数就是在命令中定义的<path>
  // console.log('ls');
  // console.log(commander.path);
  // 把当前命令指定的目录下的文件以及文件夹全部显示在控制台中
try {
  // 同步API捕获异常可以使用try/catch
  const files = fs.readdirSync(commander.path);
  console.log(files);
} catch (error) {
  // 开发环境下可以把错误打印出来，实际发布以后应该屏蔽错误信息
  console.log(error);
}
});

// 在把process.argv交给parse解析之前进行一个简单的处理，少于3个参数，表示使用的是默认值
if(process.argv.length < 3) {
  process.argv.push(__dirname);
}

commander.parse( process.argv );
// console.log(process.argv);