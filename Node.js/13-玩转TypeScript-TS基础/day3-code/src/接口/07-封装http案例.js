function http(params) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(params.method, params.url, params.isAsync);
    xhr.onload = function () {
      resolve(JSON.parse(xhr.responseText));
    }
    xhr.onerror = function () {
      reject({
        code: xhr.response.code,
        message: '出错了!'
      })
    }
    xhr.send();
  })
}


// 期待的使用方式
// http('url').then( data => {} )

http({
  method: 'get',
  url: 'http://www.baidu.com/',
  isAsync: true
})

/* 
  问题：如果将method改成methods，因为没有类型检测，你很难在代码里面看出来
  必须在运行之后才能看出来。
  这个时候如果使用ts来实现就会好很多。
*/