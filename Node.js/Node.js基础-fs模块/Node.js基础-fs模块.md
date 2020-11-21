# Node.js基础-fs模块

## 文件相关操作

### 1.写入数据到文件

```js
fs.writeFile('./test.txt', 'Hello', (err)=>{
  if(err) {
    console.log("写入失败！");
  }else {
    console.log("写入成功！");
  }
})
```

input/output我们通常称之为I/O操作，它是通过将数据转换成二进制流的方式进行传输，先传输到内存的`Buffer`缓存区，再写入磁盘。

`fs.writeFile`API有下面几个特性：

1. 如果文件不存在则会自动创建
2. 如果目录不存在，创建文件则会报错
3. 如果写入的文件已存在，会覆写源文件

> First Error：node中的一种约定，如果一个回调函数有错误发生，那么约定回调函数的第一个参数专门用来提供错误对象

如果使用`fs.writeFileSync`同步方式写文件需要使用try/catch捕获错误。

```js
let res = fs.writeFileSync('./test2.txt', '好好学习，天天向上!');
let res = fs.writeFileSync('G:/aaa/1.txt', '好好学习，天天向上!');

try {
  fs.writeFileSync('./1.txt', '好好学习，天天向上！');
  console.log("写入成功!");
} catch (error) {
  console.log("写入失败!")
}
```

### 2.给文件追加内容

```js
fs.appendFileSync('./1.txt', '我是追加的内容哦...');
```

### 3.读取文件内容

注意，读取的文件默认为Buffer类型数据，需要使用`toString`函数转换成字符串类型查看。

```js
// 读取文件内容，默认为buffer类型，需要使用toString方法转换成为字符
const content = fs.readFileSync('./1.txt');
console.log(content.toString())
```

### 4.获取文件其他信息

可以使用`fs.statSync`API获取文件的其他信息，例如判断该对象是文件还是文件夹。

```js
// 获取文件其他信息
let info = fs.statSync('./1.txt');
console.log(info);
// 判断info是否是文件
console.log(info.isFile());
```

### 5.删除文件

```js
// 删除文件
fs.unlinkSync('./1.txt');
```

## 文件夹相关操作

### 1.创建文件夹

使用`fs.mkdirSync`API创建文件夹，无法递归创建。

```js
// 创建文件夹，不会进行递归创建
fs.mkdirSync('./a/b');
```

### 2.删除文件夹

这个API不会删除非空的文件夹。

```js
fs.rmdirSync('./a/b');
```

### 3.递归方式删除文件夹

```js
rmdir('./a');
function rmdir(dirPath) {
  let files = fs.readdirSync(dirPath);
  // console.log(files);
  files.forEach(item=>{
    let childPath = dirPath + '/' + item;
    console.log(childPath)
    // 当前child可能是文件也有可能是文件夹
    if(fs.statSync(childPath).isDirectory()) {
      // 因为文件夹里面可能还会有子文件，所以也不能直接删除
      // 而是需要调用rmdir方法进行递归
      rmdir(childPath);
    }else {
      // 删除每一个子文件
      fs.unlinkSync(childPath);
    }
  })
  fs.rmdirSync(dirPath);
}
```

1. 使用`fs.readdirSync`API获取文件夹下的文件或者文件夹，返回一个数组
2. 使用forEach遍历数组，判断每项是文件还是文件夹，如果是文件夹则继续调用rmdir函数进行递归，否则删除每个子文件
3. 删除空文件夹

## 文件/文件夹的监听

```js
const fs = require('fs');

// 当文件发生改变的时候，触发回调，有点类似Vue的watch哦！
fs.watchFile('./data.txt', e=>{
  // e类似事件对象，保存当前变化的细节
  // console.log(e);
  console.log("data.txt change...");
})

// 监听文件或者目录
fs.watch('./a', (eventType, fileName)=> {
  // eventType检测文件修改的行为，rename（创建、删除）、change（修改文件内容）
  // fileName输出当前改变的具体文件
  console.log(eventType, fileName);
})
```

## 让node.js的API支持Promise

```js
const fsPromises = require('fs').promises;

// node.js v10.0.0+
fsPromises.mkdir('./b').then(()=>{
  console.log("[+] 创建目录成功!");
}).catch(err=>{console.log("[-] 创建目录失败!")});
```

## 实现一个简易的CLI

```js
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
```













