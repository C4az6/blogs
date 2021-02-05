const fs = require('fs');

// 打开文件
// fs.open(filename, flags, [mode], callback);

/**
 * filename, 必选参数，文件名
 * flags,操作表示，如"r"，读方式打开
 * [mode]，权限，如777 表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err，第二个fd为一个整数，表示打开文件返回的文件描述符，windows中又称文件句柄
 */

fs.open(__dirname + '/test.txt', 'r', '0666', (err, fd) => {
  // console.log(fd);
})

// 读文件，读取打开的文件内容到缓存区中；
// fs.read(fd, buffer, offset, length, position, callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer,一个Buffer对象，v8引擎分配一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length，整数，读取文件的长度
 * position，整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer)，读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */

fs.open(__dirname + '/test.txt', 'r', (err, fd) => {
  if(err) {
    console.log(err);
    return
  }else {
    var buffer = new Buffer(255);
    // console.log(buffer.length);
    // 每一个汉字utf8编码是3个字节，英文是1个字节
    fs.read(fd, buffer, 0, 9, 3, (err, bytesRead, buffer)=>{    // 从第三个字符开始
      if(err) {
        throw err;
      }else {
        console.log("bytesRead: ", bytesRead);
        console.log(buffer);
        console.log(buffer.slice(0, bytesRead).toString());
        // 读取完后，在使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 9 ,null, (err, bytesRead, buffer)=>{
          console.log(bytesRead);
          console.log(buffer.slice(0, bytesRead).toString());
        })
      }
    })
  }
})