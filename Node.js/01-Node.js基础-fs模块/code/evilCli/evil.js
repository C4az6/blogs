/**
 * usage: node evil app -i
 * evil：我们的脚本文件
 * app：要生成的项目的名称,项目包含images、css、js文件夹并且包含初始化文件
 * -I：参数，表示要同时创建index.html文件
 * -V: 参数，查看CLI版本
 */

const fs = require('fs');

// 获取用户要生成的项目名称，process模块
let appName = process.argv[2];
if (process.argv.includes('--version') || process.argv.includes('-V')) {
  return console.log('@evil/cli v1.0.0');
}
if (!appName) return console.log("请输入项目名称!");
// 根据项目名称生成指定的目录
let appRoot = __dirname + '/' + appName;
console.log(appRoot);

if (fs.existsSync(appRoot)) {
  console.log("项目已经存在，请勿重复创建!");
  process.exit();
}

fs.mkdirSync(appRoot);
fs.mkdirSync(appRoot + '/images');
fs.mkdirSync(appRoot + '/css');
fs.writeFileSync(appRoot + '/css/index.css', '');
fs.mkdirSync(appRoot + '/js');
fs.writeFileSync(appRoot + '/js/index.js', '');

// 判断是否存在 -i 选项
if (process.argv.includes('-I')) {
  fs.writeFileSync(appRoot + '/index.html', `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello，Evil Cli :)</h1>
</body>
</html>`);

}
console.log(`项目创建完成，路径为：${appRoot}`)