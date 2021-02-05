/**
 * commander.js commander多个参数获取
 */

 const commander = require('commander');

 const subCommand = commander.command('create <a> <b> <c>');


 // 在action的回调函数的列表中参数列表就是command定义的参数
 // option就是一个参数（选项）option('-p', --path <path>)
 subCommand.action((a,b,c)=>{
   console.log(a,b,c);
 })

 commander.parse(process.argv);