const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
// 主进程
// let username = 'alexander';
// global.username = username;
let datas = {
  username: 'zMouse',
  gender: '男'
}
app.on('ready', _ => {
  console.log("app program ready...");
  let bw1 = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
  });
  bw1.loadFile('./layout/index.html')
  bw1.webContents.openDevTools();

  ipcMain.on('getData', function (e, key) {
    console.log("key", key);
    e.sender.send('sendData', datas[key]);
  })

})