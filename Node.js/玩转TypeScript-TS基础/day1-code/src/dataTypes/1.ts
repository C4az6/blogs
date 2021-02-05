// 获取input中输入的内容，限制元素的类型
let input: HTMLInputElement = document.querySelector('input');
let button: HTMLButtonElement = document.querySelector('button');

button.onclick = function() {
  let value: number = Number(input.value) + 10;
  console.log(value);
}