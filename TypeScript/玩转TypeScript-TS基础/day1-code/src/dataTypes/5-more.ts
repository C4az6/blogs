let a: string | number;
a = "m";

a = 1;
a = '1';
// a = false;   // 报错，不能把boolean类型分配给string或者number类型
console.log(a);