const http = require('http')
const HOST = 'http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json'
const req = http.request(HOST, res=>{
  let chunks = []
  res.on('data', c => chunks.push(c))
  res.on('end', _=>{
    let result = Buffer.concat(chunks).toString()
    console.log(JSON.parse(result))
  })
})

req.end()