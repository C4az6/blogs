## Day1内容

### 安装typescript编译器

全局安装：`npm install -g typescript`

在命令行中查看ts编译器版本判断是否安装成功。

![1609407038460](medias/1609407038460.png)

TypeScript 文件默认以 .ts 为后缀，TypeScript 是 JavaScript 的扩展，所以 TypeScript 代码要在 浏览器/Node 环境下运行，需要把 TypeScript 代码编译为 JavaScript 代码。



### ts初体验

![1609407628309](medias/1609407628309.png)



### ts-node

这是一个基于Node.js的运行typescript的REPL环境，适用于*typescript@>=2.7*。

ts-node这个插件方便我们直接执行ts文件，不用手动执行ts编译后的js文件，很方便。

[Github地址](https://github.com/TypeStrong/ts-node)

全局安装：`npm install -g ts-node`

![1609408022120](medias/1609408022120.png)



### tsconfig.json

当使用 tsc 并不指定 要编译的ts文件 的情况下，会从当前运行命令所在的目录开始逐级向上查找 tsconfig.json 文件。

tsconfig.json 文件用来配置 tsc 的编译配置选项。

我们也可以通过 --project（-p） 来指定一个包含 tsconfig.json 文件的目录来进行编译。

**编译选项**

```json
{
  "compilerOptions": {
      "module": "ES2015",
      "target": "ES5",
      "outDir": "./dist"
  },
  "include": [
    "./src/**/*"
  ]
}
```

compilerOptions字段定义了编译相关设置

- module：指定编译后的代码要使用的模块化系统
- target：指定编译后的代码对应的ECMAScript版本
- outDir：指定编译后的代码文件输出目录
- outFile：将输出文件合并成一个文件（合并的文件顺序为加载和依赖顺序）

include字段指定了要包含的编译文件目录，它的值是一个目录数组，使用glob模式

- *匹配0或多个字符（不包括目录分隔符）
- ？匹配一个任意字符（不包括目录分隔符）
- **/递归匹配任意子目录

exclude：指定不要包含的编译文件目录，值也是一个目录数组，类似include，默认会排除*`node_modules`*和*`outDir`*指定的目录。

![1609462985685](medias/1609462985685.png)

### 类型系统

类型注解（类型声明、类型约束）

JavaScript是动态语言，变量随时可以被赋予不同类型的值，变量值的类型只有在运行时才能决定。

在编码（编译）阶段无法确定数据类型，会给程序在实际运行中带来极大的隐患，不利于编码过程中的错误排查。

使用类型注解就能够在变量声明的时候确定变量存储的值的类型，用来约束变量或参数值的类型，这样在编码阶段就可以检查出可能出现的问题，避免把错误带到执行期间。

#### 语法

语法：let变量：类型

当变量接收了与定义的类型不符的数据会导致编译失败（警告）。

![1609466002083](medias/1609466002083.png)

![1609466035984](medias/1609466035984.png)



#### 类型

官方文档：<https://www.tslang.cn/docs/handbook/basic-types.html>

typescript中定义的类型有：

数字、字符串、布尔值

null、undefined

数组、元组、枚举

void、any、Never

##### 字符串&数字类型

```typescript
let a: string;
a = 'asd';
// a = 1;

let b: string = 'test';

let c: String = 'test123';    // 可以把基本数据类型赋值给对应的包装对象类型
let d: String = new String('test456');
// let e: string = new String('test789');    // 不可以把包装对象类型赋值给基本类型

let f: number;
f  = 123;
// f = '123';   // 报错
```

string、number、boolean属于基本类型

String、Number、Boolean：属于对象类型

注意：

- 包装类型可以赋值给对应包装对象
- 包装对象不可以赋值给对应基本类型

```typescript
let s: String = 'some string...';		// 正确
let s: string = new String('some string...');		// 错误
```

##### 数组

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```typescript
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```typescript
let list: Array<number> = [1, 2, 3];
```

```typescript
/**
 * 定义数组的方式有2种，第一种可以在元素后面接上[],表示由此类型元素组成的一个数组
 * 第二种方式就是使用数组泛型，Array<元素类型>
 */
let list: number[] = [1,2,3];
console.log(list);
// console.log(list.push('4'));    // 直接报错 不能把字符串类型的数据添加到number类型的数组中

// 数组泛型创建方式
let list2: Array<string> = ['a','b','c'];
console.log(list2);
console.log(list2.push('1,2,3','456'));
// console.log(list2.push(1,2,3));   // 直接报错 不能把number类型的数据添加到string类型的数组中
console.log(list2);

```

##### 元组

与数组类似，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，对于下标内的数据，数据顺序必须与声明中的类型一一对应。

```typescript
/**
 * 与数组类似，但是可以存放多种不同类型
 */

let data1: [number, string, boolean];

// 注意：顺序要对应
data1 = [1,'123',true]
```

##### 联合类型

多个类型中的一个，或的关系。

```typescript
let a: string | number;
a = "m";

a = 1;
a = '1';
// a = false;   // 报错，不能把boolean类型分配给string或者number类型
console.log(a);
```

##### 枚举类型

使用枚举可以为一组数据赋予友好的名字，`enum Color {Red, Green, Blue}`，默认情况下，元素编号从0开始，也可以手动编号`enum Color {Red=1...}`

```typescript
// let gender:number = 1;    // 1：男，2：女
// if(gender==1) {   // 容易忘记1表示的是什么

// }else {}


enum Gender {Male, Female};  // enum Gender {Male=0, Female=1};

if(Gender.Male) {
  console.log("男");
}else {
  console.log("女")
}

// enum Gender {Male=1, Female};   // Female会从2开始
```

#### 类型推导

有的时候不一定需要强制使用类型声明，在某些情况下 TS 可以根据语境进行类型推导。

**变量初始化**的时候TS 会根据变量初始化的时候赋予的值进行类型推断。

**上下文推断**的时候TS 也会根据上下文进行类型的推断，比如在事件函数中，函数的第一个参数会根据当前绑定的事件类型推断处理事件对象。



