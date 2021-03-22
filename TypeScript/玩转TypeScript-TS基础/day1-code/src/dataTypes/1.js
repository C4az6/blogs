// 获取input中输入的内容，限制元素的类型
var input = document.querySelector('input');
var button = document.querySelector('button');
button.onclick = function () {
    var value = Number(input.value) + 10;
    console.log(value);
};
