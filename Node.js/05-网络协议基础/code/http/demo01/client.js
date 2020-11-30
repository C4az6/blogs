const http = require('http');

const client = http.request({
  url: '127.0.0.1',
  port: 80,
  protocol: 'http:',
  method: 'get',
  path: '/'
}, (res)=>{
  
})

// client.write('talk is cheap, show me the code.');
client.end();
