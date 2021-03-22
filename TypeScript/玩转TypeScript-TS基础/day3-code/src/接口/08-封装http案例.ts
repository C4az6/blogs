interface HttpOptions {
  method: string,
  url: string,
  isAsync: true
}

interface HttpResponseData {
  code: number,
  data: any
}

function http(options: HttpOptions) {
  // 默认值处理
  let params: HttpOptions = Object.assign({
    method: 'get',
    url: '',
    isAsync: true
  }, options)
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(params.method, params.url, params.isAsync);
    xhr.onload = function () {
      let data: HttpResponseData = JSON.parse(xhr.responseText);
      resolve(data);
    }
    xhr.onerror = function () {
      reject({
        code: 0,
        data: []
      })
    }
    xhr.send();
  })
}


// 期待的使用方式
// http('url').then( data => {} )

http({
  method: 'get',
  // methods: 'get',   // 报错，因为HttpOptions接口中没有定义methods属性，ts会帮助我们在程序运行之前检测代码是否错误
  url: 'https://www.baidu.com/',
  isAsync: true
}).then( res => {
  console.log(res);
})
