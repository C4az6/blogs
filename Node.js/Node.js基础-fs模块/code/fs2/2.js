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