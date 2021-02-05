const fsPromises = require('fs').promises;

// node.js v10.0.0+
/* fsPromises.mkdir('./b').then(()=>{
  console.log("[+] 创建目录成功!");
}).catch(err=>{console.log("[-] 创建目录失败!")}); */


fsPromises.writeFile('test.js', '').then(res=>{
  console.log(res)
}).catch(err=>{console.log(err)});