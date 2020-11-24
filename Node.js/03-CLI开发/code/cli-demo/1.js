const commander = require('commander');

// 设置当前命令的版本
commander.version("v1.0.0", '-v, --version');
/**
 * 设置其他option，--name 后面的 [val] 是当前这个选项的参数值
 * []表示可选，<>表示必填
 * 如果第三个参数是一个函数的话，那么该函数会接收来自用户输入的值并返回最后一个值最为这个参数实际的值
 */
// commander.option('-s, --setname [val]', '设置名称', (val)=>{
//   console.log(val);
// })

// commander.option('-s, --setname <val>', '设置名称', (val)=>{
//   console.log(val);
// })

commander.option('-s --setname [val]', '设置名称', '我是默认值')

commander.command('create');

// 设置命令的动作
commander.action(() => {
  // 这里的setname其实是option中设置的完整命令变量名，用户输入命令之后，commander会自动挂载
  console.log("Hello " + commander.setname);
})

// 解析来自process.argv上的数据，commander会自动帮助我们添加一个 -h 的解析
commander.parse(process.argv);