const commander = require('commander');
const fs = require('fs');

commander.version('v1.0.0', '-v, --version');

commander.option('-s --setname [val]', '设置名称', '');

commander.command('create <app-name>')
.description('创建项目')
.alias('c')
.usage('使用说明')
.action(appName=>{
  console.log("项目名称: ", appName);
  // 使用fs.existsSync API判断文件夹是否存在
  if(fs.existsSync(appName)) {
    return console.log("项目已经存在!");
  }
  fs.mkdirSync(appName)
  console.log("[+] project init success!");
})

commander.parse( process.argv );