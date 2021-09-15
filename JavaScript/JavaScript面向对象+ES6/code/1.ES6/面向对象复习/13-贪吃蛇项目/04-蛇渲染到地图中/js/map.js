(function () {
  // 写成自动用函数的目的是让Map防止和其他文件的变量冲突
  // 构造函数 - 地图构造函数
  function Map(obj) {
    /* 
      属性：width、height、background、element、
      方法：render创建地图（构造函数的方法推荐写在原型对象中）
     */
    var obj = obj || {};
    this.width = obj.width || 800;
    this.height = obj.height || 400;
    this.backgroundColor = obj.backgroundColor || '#333';
    this.element = null; // element属性用来存储创建的地图盒子
    // 通过实例对象，对用初始化地图的方法
    this.render();
    /* 
      this 就是实例对象，构造函数执行完毕后自动 return this;
      把 this 实例对象保存给变量map，map只是接收 this 实例对象的变量名而已
      return this
     */
  }

  // 给Map构造函数的原型对象上面添加render方法
  Map.prototype.render = function () {
    // 创建地图元素
    var mapTag = document.createElement('div');
    document.body.appendChild(mapTag);
    this.element = mapTag;
    // 设置元素样式
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.backgroundColor = this.backgroundColor;
    this.element.style.position = 'relative';
    this.element.style.margin = '50px auto';
  }
  // 把自调用函数的局部Map变成全局对象Map，在任何地方都能调用到
  window.Map = Map;
})();