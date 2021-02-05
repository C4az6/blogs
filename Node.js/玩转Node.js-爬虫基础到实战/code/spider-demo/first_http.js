const http = require('http')
let req = http.request('http://web.itheima.com/teacher.html', res => {
  let chunks = []
  res.on('data', c => chunks.push(c))
  res.on('end', () => {
    let html = Buffer.concat(chunks).toString('utf-8')
    console.log(html)
  })
})

req.end()