// console.log(__dirname);
const {
  app,
  BrowserWindow
} = require('electron');

/**
 * 学习的内容
 *  1.事件
 *  2.属性
 *  3.方法
 */

// 继承Node.js中的Event.Emmiter事件系统
app.on('ready', () => {
  /*    console.log("ok");
     setTimeout(_=>{
       // 退出程序
       app.exit();
     }) */
  let bw1 = new BrowserWindow({
    width: 500,
    height: 500,
    // 是否允许改变窗口尺寸
    // resizable: true,
    // 是否置顶窗口
    // alwaysOnTop: true,
    title: '乐购商城',
    // 窗口是否有边框,一般用于自定义内容，取代原生的按钮之类的功能
    // frame: false,
    // 是否开启窗口透明，有问题！！！
    // transparent: false
  });

  // bw1的子窗口
  let bw2 = new BrowserWindow({
    width: 300,
    height: 300,
    parent: bw1,
    modal: true
  })

  // 与窗口有关的浏览器中的内容都是通过下面的属性类进行操作
  // bw1.webContents，类似浏览器中的window
  //  bw1.webContents.openDevTools();    // 开启开发者调试工具,类似chrome的调试工具
  //  console.log("bw1: ", bw1.id);

  /* 
   加载指定的页面到窗口中,支持绝对路径，推荐使用相对路径，
   而且路径在解析的时候会被处理，相对路径默认指向应用程序的根目录
  */
 bw1.loadFile('./layout/app.html')
 
 // 支持加载远程文件，支持http协议，也支持file协议
//  bw1.loadURL('https://www.baidu.com/');
})