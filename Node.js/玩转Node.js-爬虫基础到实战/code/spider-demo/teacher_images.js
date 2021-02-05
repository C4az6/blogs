const http = require('http')
const cheerio = require('cheerio')
const download = require('download')

let req = http.request('http://web.itheima.com/teacher.html', res => {
  let chunks = []
  res.on('data', c => chunks.push(c))
  res.on('end', () => {
    let html = Buffer.concat(chunks).toString('utf-8')
    let $ = cheerio.load(html)

    let imgArr = Array.prototype.map.call($('.maincon .main_pic > img'), item => encodeURI(`http://web.itheima.com/${$(item).attr('src')}`))
    Promise.all(imgArr.map(x => download(x, 'dist'))).then(() => {
      console.log('----------------------图片下载完成！----------------------')
    })
  })
})

req.end()