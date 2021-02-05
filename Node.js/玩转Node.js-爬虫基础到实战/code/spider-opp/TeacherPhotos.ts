// 封装完毕之后，如果需要做爬虫，只需要以下几步：
// 1. 写一个爬虫类，继承Spider
// 2. 实现onCatchHTML方法（爬虫获取资源后需要做的事情）
// 3. 使用：创建该爬虫对象，传入URL即可
declare var require: any
const cheerio = require('cheerio')
const download = require('download')
// 导入Spider父类
import Spider from './Spider'
export default class TeacherPhotos extends Spider {
  // 实现抽象方法
  onCatchHTML(result: string) {
    // 根据html的img标签src属性来下载图片
    let $ = cheerio.load(result)
    let imgs = Array.prototype.map.call($('.maincon .main_pic > img'), item => encodeURI(`http://web.itheima.com/${$(item).attr('src')}`))
    Promise.all(imgs.map(x => download(x, 'dist'))).then(()=>{
      console.log("---------------- files donwloaded! ----------------")
    })
  }
}