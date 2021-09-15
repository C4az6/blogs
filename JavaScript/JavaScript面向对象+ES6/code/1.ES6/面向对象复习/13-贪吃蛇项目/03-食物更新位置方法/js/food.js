(function () {
  // 创建贪吃蛇食物构造函数
  function Food(obj) {
    obj = obj || {}
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.backgroundColor = obj.backgroundColor || 'lightgreen';
    this.left = obj.left || 0;
    this.top = obj.top || 0;
    this.element = null;
    console.log(this);
    this.render();
    this.randomPosition();
    this.randomColor();
  }

  // 在Food构造函数的原型对象上添加 渲染食物 方法
  Food.prototype.render = function () {
    // 创建食物元素
    var foodBox = document.createElement('div');
    this.element = foodBox;
    console.log("食物元素: ", map.element);
    console.log("地图的元素: ", map.element);
    map.element.appendChild(this.element);

    // 设置样式
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.backgroundColor = this.backgroundColor;
    this.element.style.position = 'absolute';
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
  }

  // 在Food构造函数的原型对象上添加 随机位置 方法
  Food.prototype.randomPosition = function () {
    var randomLeft = Math.ceil(Math.random() * (780 / 20)) * 20;
    var randomTop = Math.ceil(Math.random() * (380 / 20)) * 20;
    // 更新数据
    this.top = randomTop;
    this.left = randomLeft;
    this.element.style.top = randomTop + "px";
    this.element.style.left = randomLeft + "px";

  }

  // 在Food构造函数的原型对象上添加 随机颜色 方法
  Food.prototype.randomColor = function () {
    var randomColorA = Math.ceil(Math.random() * 255);
    var randomColorB = Math.ceil(Math.random() * 255);
    var randomColorC = Math.ceil(Math.random() * 255);
    // 更新数据
    this.backgroundColor = `rgb(${randomColorA},${randomColorB},${randomColorC})`
    // 更新视图
    this.element.style.backgroundColor = this.backgroundColor;
  }
  // 挂载到window全局对象中
  window.Food = Food;
})();