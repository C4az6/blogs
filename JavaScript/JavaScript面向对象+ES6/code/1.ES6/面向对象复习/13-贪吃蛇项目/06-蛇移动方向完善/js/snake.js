(function () {
  // 创建蛇的构造函数
  function Snake(obj) {
    /* 
          蛇对象的属性和方法：
            1.属性：
              1.1 宽度（width）
              1.2 高度（height）
              1.3 存放每节蛇身体的数组（element）
  
            2.方法：
              2.1 render()函数，用于创建蛇的身体
              2.2 style()函数，用于初始化蛇的样式
        */
    obj = obj || {};
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.body = obj.body || [ // 用于存储蛇3节身体的属性
      {
        top: this.height * 1,
        left: this.width * 3,
        backgroundColor: 'lightpink'
      },
      {
        top: this.height * 1,
        left: this.width * 2,
        backgroundColor: 'lightgreen'
      },
      {
        top: this.height * 1,
        left: this.width * 1,
        backgroundColor: 'purple'
      }
    ]
    // 蛇的方向
    this.direction = obj.direction || "right";

    // 存储创建的蛇身体的盒子
    this.element = [];
    this.map = obj.map || {};
    this.render();
  }

  // 给蛇的构造函数原型对象上添加 渲染 方法
  Snake.prototype.render = function () {
    // 蛇的每一节都是一个元素，创建这些元素并添加到地图对象中
    for (var i = 0; i < this.body.length; i++) {
      this.element[i] = document.createElement('div');
      this.map.element.appendChild(this.element[i]);
    }
    // 循环添加完蛇的身体之后再调用更新样式的方法
    this.style();
  }

  // 更新蛇的样式
  Snake.prototype.style = function () {
    // 遍历蛇身体的数据，用于更新样式
    for (var i = 0; i < this.body.length; i++) {
      // 设置基本样式：宽、高、top、left、背景色、定位方式
      this.element[i].style.width = this.width + "px";
      this.element[i].style.height = this.height + "px";
      // 数据来源于this.body中
      this.element[i].style.top = this.body[i].top + "px"
      this.element[i].style.left = this.body[i].left + "px"
      this.element[i].style.backgroundColor = this.body[i].backgroundColor;
      this.element[i].style.position = "absolute";
    }
  }

  // 原型对象 - 添加方法 - move 蛇移动方法
  Snake.prototype.move = function () {
    // 蛇尾 蛇中：先移动蛇尾和蛇中，蛇的前进其实就是后面推着前面走，需要倒序循环
    for (var i = this.body.length - 1; i > 0; i--) {
      // 蛇中的数据给蛇尾 [2] 是蛇尾索引  [1] 是蛇中索引
      this.body[i].left = this.body[i - 1].left;
      this.body[i].top = this.body[i - 1].top;
    }
    // 蛇头：蛇头移动单独处理，蛇头索引值是 [0]
    // this.body[0].left += this.width;
    switch (this.direction) {
      case "right":
        this.body[0].left += this.width;
        break;
      case "left":
        this.body[0].left -= this.width;
      case "up":
        this.body[0].top -= this.height;
      case "down":
        this.body[0].top += this.height;
    }
    // 调用style方法更新蛇样式，让蛇在界面中动起来
    this.style();
  }


  // 将蛇的对象挂载到window全局对象中
  window.Snake = Snake;
})();