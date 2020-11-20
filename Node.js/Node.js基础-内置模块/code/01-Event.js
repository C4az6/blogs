// 引入node.js中的事件系统
const EventEmmiter = require('events');

class Person extends EventEmmiter {
  constructor(name) {
    super();
    this.name = name;
    this.age = 0;
    this.growup();
  }

  // 成长的方法
  growup() {
    setInterval(()=>{
      this.age++;
      // 触发growup事件
      this.emit('growup');
    }, 1000);
  }
}

let p1 = new Person('张三');
// 让p1对象监听growup事件
p1.addListener('growup', function(){
  console.log(this.age);
})
console.log(p1);