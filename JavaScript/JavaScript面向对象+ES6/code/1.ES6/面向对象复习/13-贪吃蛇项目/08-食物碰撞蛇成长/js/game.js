(function () {
  // 构造函数 - 用于游戏对象
  function Game() {
    // 游戏属性 - 地图
    this.map = new Map();
    // 游戏属性 - 食物
    this.food = new Food({
      map: this.map
    });
    console.log(this)
    // 游戏属性 - 蛇
    this.snake = new Snake({
      map: this.map,
      food: this.food,
      direction: 'right'
    });

    // 调用开始游戏的方法 start
    this.start();
    this.bindKey();
  }

  // 原型对象 - 添加方法 - start 游戏开始
  Game.prototype.start = function () {
    // 游戏开始的时候，蛇动起来
    that = this;
    this.timer = setInterval(function () {
      that.snake.move();

      // 添加边界判断，超过边界则弹窗提示game over！
      // 获取蛇头对象
      var snakeHead = that.snake.body[0];
      // 如果满足下面4个条件就清除定时器
      if (snakeHead.left >= that.map.width || snakeHead.left < 0 || snakeHead.top < 0 || snakeHead.top >= that
        .map.height) {
        console.log("触发边界检测！！！")
        clearInterval(that.timer);
      }

      // 食物碰撞检测：蛇头left、top坐标 和 食物 left top坐标 相等时说明蛇吃到食物了
      if (snakeHead.left === that.food.left && snakeHead.top === that.food.top) {
        console.log("蛇头碰到食物了!")
        // 调用蛇成长的方法
        that.snake.growth();
        // 碰撞到食物，调用食物更新位置的方法
        that.food.randomPosition();
        that.food.randomColor();
      }
    }, 200);
  }

  // 原型对象 - 添加方法 - bindKey 绑定键盘按下事件
  Game.prototype.bindKey = function () {
    that = this;
    document.body.addEventListener('keydown', function (e) {
      console.log(e)
      if (e.keyCode === 37) {
        that.snake.direction = 'left';
      } else if (e.keyCode === 38) {
        that.snake.direction = 'up';
      } else if (e.keyCode === 39) {
        that.snake.direction = 'right';
      } else if (e.keyCode === 40) {
        that.snake.direction = 'down';
      }
    })
  }

  window.Game = Game;
})()