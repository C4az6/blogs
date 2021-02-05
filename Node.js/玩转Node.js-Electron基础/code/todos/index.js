const {app, BrowserWindow} = require('electron')

app.on(ready, ()=>{
  const win = new BrowserWindow({
    width: 540,
    height: 720
  });

  win.loadFile()
})