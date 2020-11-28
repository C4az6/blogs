const {
  app,
  BrowserWindow,
  Menu,
  MenuItem
} = require('electron');

app.on('ready', _ => {
  let bw1 = new BrowserWindow();

  // 创建菜单对象
  let m1 = new Menu();

  // 创建菜单项
  let mItem1 = new MenuItem({
    type: 'normal',
    label: '文件'
  });

  // 创建子菜单项
  let mItem2 = new MenuItem({
    type: 'submenu',
    label: '查看',
    submenu: [{
        type: 'normal',
        label: '查看文件'
      },
      // {
      //   type: 'separator'   // 菜单分隔符
      // },
      {
        type: 'normal',
        label: '查看文件夹'
      },
      {
        type: 'checkbox',
        label: 'checkbox',
        checked: true
      },
      {
        type: 'radio',
        label: 'AAA',
        checked: true
      },
      {
        type: 'radio',
        label: 'BBB',
        checked: false
      },
      {
        type: 'radio',
        label: 'CCC',
        checked: false
      },
      // {
      //   role: 'quit',
      //   labe: '退出程序'
      // }
      {
        type: 'normal',
        label: '退出',
        click() {
          app.quit();
        }
      }
    ]
  })
  // 把菜单项添加到指定的菜单对象中
  m1.append(mItem1);
  m1.append(mItem2);
  /* 
    指定该菜单显示的主体（具体哪个窗口、右键-上下文）
    菜单位置：
      1.应用程序的顶层菜单
      2.上下文菜单
  */
  // 把菜单添加到应用程序窗口最顶层
  Menu.setApplicationMenu(m1);
})