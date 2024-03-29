## TypeScript历史

### JavaScript一门优秀的语言

我始终相信：任何新技术的出现都是为了解决原有技术的某个痛点。

JavaScript是一门优秀的编程语言吗？

- 每个人可能观点并不完全一致，但是从很多角度来看，JavaScript是一门非常优秀的编程语言；
- 而且，可以说在很长一段时间内这个语言不会被代替，并且会在更多的领域被大家广泛使用；

著名的Atwood定律：

- Stack Overflow的创立者之一的 Jeff Atwood 在2007年提出了著名的 Atwood定律。
- any application that can be written in JavaScript, will eventually be written in JavaScript.
- 任何可以使用JavaScript来实现的应用都最终都会使用JavaScript实现。

其实我们已经看到了，这句话正在一步步被应验：

- Web端的开发我们一直都是使用JavaScript；
- 移动端开发可以借助于ReactNative、Weex、Uniapp等框架实现跨平台开发；
- 小程序端的开发也是离不开JavaScript；
- 桌面端应用程序我们可以借助于Electron来开发；
- 服务器端开发可以借助于Node环境使用JavaScript来开发。



### JavaScript的痛点

并且随着近几年前端领域的快速发展，让JavaScript迅速被普及和受广大开发者的喜爱，借助于JavaScript本身的强大，也让使用JavaScript开发的人员越来越多。



优秀的JavaScript没有缺点吗？

- 其实上由于各种历史因素，JavaScript语言本身存在很多的缺点；
- 比如ES5以及之前的使用的var关键字有作用域的问题；
- 比如最初JavaScript设计的数组类型并不是连续的内存空间；
- 比如直到今天JavaScript也没有加入类型检测这一机制；



JavaScript正在慢慢变好

- 不可否认的是，JavaScript正在慢慢变得越来越好，无论是从底层设计还是应用层面。
- ES6、7、8等的推出，每次都会让这门语言更加现代、更加安全、更加方便。
- 但是直到今天，JavaScript在类型检测上依然是毫无进展（为什么类型检测如此重要，我后面会聊到）。



### 类型带来的问题

首先你需要知道，编程开发中我们有一个共识：错误出现的越早越好

- 能在写代码的时候发现错误，就不要在代码编译时再发现（IDE的优势就是在代码编写过程中帮助我们发现错误）。
- 能在代码编译期间发现错误，就不要在代码运行期间再发现（类型检测就可以很好的帮助我们做到这一点）。
- 能在开发阶段发现错误，就不要在测试期间发现错误，能在测试期间发现错误，就不要在上线后发现错误。



现在我们想探究的就是如何在 代码编译期间 发现代码的错误：

- JavaScript可以做到吗？不可以，我们来看下面这段经常可能出现的代码问题。

![image-20211129092518046](medias/image-20211129092518046.png)



![image-20211129092521430](medias/image-20211129092521430.png)



### 类型错误

这是我们一个非常常见的错误：

- 这个错误很大的原因就是因为JavaScript没有对我们传入的参数进行任何的限制，只能等到运行期间才发现这个错误；
- 并且当这个错误产生时，会影响后续代码的继续执行，也就是整个项目都因为一个小小的错误而深入崩溃；



当然，你可能会想：我怎么可能犯这样低级的错误呢？

- 当我们写像我们上面这样的简单的demo时，这样的错误很容易避免，并且当出现错误时，也很容易检查出来；
- 但是当我们开发一个大型项目时呢？你能保证自己一定不会出现这样的问题吗？而且如果我们是调用别人的类库，又如何知道让我们传入的到底是什么样的参数呢？



但是，如果我们可以给JavaScript加上很多限制，在开发中就可以很好的避免这样的问题了：

- 比如我们的getLength函数中str是一个必传的类型，没有调用者没有传编译期间就会报错；
- 比如我们要求它的必须是一个String类型，传入其他类型就直接报错；
- 那么就可以知道很多的错误问题在编译期间就被发现，而不是等到运行时再去发现和修改；



### 类型思维的缺失

我们已经简单体会到没有类型检查带来的一些问题，JavaScript因为从设计之初就没有考虑类型的约束问题，所以造成了前端开发人员关于类型思维的缺失：

- 前端开发人员通常不关心变量或者参数是什么类型的，如果在必须确定类型时，我们往往需要使用各种判断验证；
- 从其他方向转到前端的人员，也会因为没有类型约束，而总是担心自己的代码不安全，不够健壮；



所以我们经常会说JavaScript**不适合开发大型项目**，因为当项目一旦庞大起来，这种宽松的类型约束会带来非常多的安全隐患，多人员开发它们之间也**没有良好的类型契约**。

- 比如当我们去实现一个核心类库时，如果没有类型约束，那么需要对**别人传入的参数进行各种验证**来保证我们代码的健壮性；
- 比如我们去调用别人的函数，对方没有对函数进行任何的注释，我们只能去看里面的逻辑来理解这个函数需要**传入什么参数，返回值是什么类型**；



### JavaScript添加类型约束

为了弥补JavaScript类型约束上的缺陷，增加类型约束，很多公司推出了自己的方案：

- `2014`年，`Facebook`推出了`flow`来对JavaScript进行类型检查；
- 同年，`Microsoft`微软也推出了`TypeScript1.0`版本；
- 他们都致力于为JavaScript提供**类型检查**；



而现在，无疑TypeScript已经完全胜出：

- Vue2.x的时候采用的就是flow来做类型检查；
- Vue3.x已经全线转向TypeScript，98.3%使用TypeScript进行了重构；
- 而Angular在很早期就使用TypeScript进行了项目重构并且需要使用TypeScript来进行开发
- 而甚至Facebook公司一些自己的产品也在使用TypeScript；

学习TypeScript不仅仅可以为我们的代码增加类型约束，而且可以培养我们前端程序员具备类型思维。



### 认识TypeScript

虽然我们已经知道TypeScript是干什么的了，也知道它解决了什么样的问题，但是我们还是需要全面的来认识一下TypeScript到底是什么？

我们来看一下TypeScript在GitHub和官方上对自己的定义：

- GitHub说法：TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- TypeScript官网：TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- 翻译一下：TypeScript是拥有类型的**JavaScript超集**，它**可以编译成普通、干净、完整的JavaScript代码**。



怎么理解上面的话呢？

- 我们可以将TypeScript理解成**加强版的JavaScript**。
- JavaScript所拥有的特性，TypeScript全部都是支持的，并且它紧随ECMAScript的标准，所以ES6、ES7、ES8等新语法标准，它都是支持的；
- 并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型（Enum）、元组类型（Tuple）等；
- TypeScript在实现新特性的同时，总是保持和ES标准的同步甚至是领先；
- 并且TypeScript最终会被编译成JavaScript代码，所以你并不需要担心它的兼容性问题，在编译时也不需要借助于Babel这样的工具；
- 所以，我们可以把TypeScript理解成更加强大的JavaScript，不仅让JavaScript更加安全，而且给它带来了诸多好用的好用特性；



### TypeScript的特点

官方对TypeScript有几段特点的描述，我觉得非常到位（虽然有些官方，了解一下），我们一起来分享一下：

- 始于JavaScript，归于JavaScript
  - TypeScript从今天数以百万计的JavaScript开发者所熟悉的语法和语义开始。使用现有的JavaScript代码，包括流行的JavaScript库，并从JavaScript代码中调用TypeScript代码；
  - TypeScript可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中；
- TypeScript是一个强大的工具，用于构建大型项目
  - 类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构；
  - 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有JavaScript库的行为；
- 拥有先进的 JavaScript
  - TypeScript提供最新的和不断发展的JavaScript特性，包括那些来自2015年的ECMAScript和未来的提案中的特性，比如异步功能和Decorators(装饰器)，以帮助建立健壮的组件；
  - 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的ECMAScript3（或更新版本）的JavaScript；



### 众多项目采用TypeScript

正是因为有这些特性，TypeScript目前已经在很多地方被应用：

- Angular源码在很早就使用TypeScript来进行了重写，并且开发Angular也需要掌握TypeScript；
- Vue3源码也采用了TypeScript进行重写，在前面阅读源码时我们看到大量TypeScript的语法；
- 包括目前已经变成最流行的编辑器VSCode也是使用TypeScript来完成的；
- 包括在React中已经使用的ant-design的UI库，也大量使用TypeScript来编写；
- 目前公司非常流行Vue3+TypeScript、React+TypeScript的开发模式；
- 包括小程序开发，也是支持TypeScript的；



### 前端学不动系列

在之前deno的issue里面出现了一个问题：

![image-20211129094611679](medias/image-20211129094611679.png)



### 大前端的发展趋势

大前端是一群最能或者说最需要折腾的开发者：

- 客户端开发者：从Android到iOS，或者从iOS到Android，到RN，甚至现在越来越多的客户端开发者接触前端相关知识（Vue、React、Angular、小程序）；
- 前端开发者：从jQuery到AngularJS，到三大框架并行：Vue、React、Angular，还有小程序，甚至现在也要接触客户端开发（比如RN、Flutter）；
- 目前又面临着不仅仅学习ES的特性，还要学习TypeScript；
- 新框架的出现，我们又需要学习新框架的特性，比如vue3.x、react18等等；



但是每一样技术的出现都会让人惊喜，因为他必然是解决了之前技术的某一个痛点的，而TypeScript真是解决了JavaScript存在的很多设计缺陷，尤其是关于类型检测的。



并且从开发者长远的角度来看，学习TypeScript有助于我们前端程序员培养 类型思维，这种思维方式对于完成大型项目尤为重要。



## TypeScript环境搭建

### TypeScript的编译环境

在前面我们提到过，TypeScript最终会被编译成JavaScript来运行，所以我们需要搭建对应的环境：

- 我们需要在电脑上安装TypeScript，这样就可以通过TypeScript的Compiler将其编译成JavaScript；

  ![image-20211129094838508](medias/image-20211129094838508.png)

- 所以，我们需要先可以先进行全局的安装：

  ```shell
  # 安装命令
  npm install typescript -g
  
  #查看版本
  tsc --version
  ```





### TypeScript的运行环境

如果我们每次为了查看TypeScript代码的运行效果，都通过经过两个步骤的话就太繁琐了：
- 第一步：通过tsc编译TypeScript到JavaScript代码；
- 第二步：在浏览器或者Node环境下运行JavaScript代码；

是否可以简化这样的步骤呢？
- 比如编写了TypeScript之后可以直接运行在浏览器上？
- 比如编写了TypeScript之后，直接通过node的命令来执行？

上面我提到的两种方式，可以通过两个解决方案来完成：
- 方式一：通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上；
- 方式二：通过ts-node库，为TypeScript的运行提供执行环境；

方式一：webpack配置

### webpack配置TS环境

先装包

```shell
npm install webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D
```

这里面有个坑，就是`webpakc-dev-server`已经更新到`4.x`的版本了，如果你的`Node.js`版本比较低会导致报错，建议更新最新的`Node.js`版本

如果不想安装最新`Node.js`版本，建议使用下面写好的`package.json`文件，直接`npm i`安装依赖即可。

```json
{
  "name": "03_webpack_ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "serve": "webpack serve"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.3.2",
    "ts-loader": "^9.2.3",
    "typescript": "^4.3.5",
    "webpack": "^5.44.0",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  }
}

```

在项目根目录创建`src`目录和`index.html`还有`webpack.config.js`配置文件,然后将下面代码覆盖到`webpack.config.js`中。

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>

```

`webpack.config.js`

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
  },
  resolve: {
    extensions: [".ts", ".js", ".cjs", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}

```

具体的各项配置是什么意思，参考我之前写的 `webpack` 笔记

在`src`目录中创建`main.ts`文件，写点 TS 代码。

`main.ts`

```typescript
interface IPerson {
  name: string
  age: number
}

class Person implements IPerson {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getUserInfo() {
    return `[*] my name is: ${this.name}, i am ${this.age} years old.`
  }
}

const p1 = new Person('惠兰', 18)
console.log(p1)
console.log(p1.getUserInfo())
```

此时如果直接`npm run serve`会报错的，因为还缺少`tsconfig.json`配置文件，这里直接通过`tsc --init`创建，然后`npm run serve`运行就能跑起来了。

**最终项目目录结构：**

![image-20211213122729904](medias/image-20211213122729904.png)

**运行效果：**

![image-20211213122743608](medias/image-20211213122743608.png)





### 使用ts-node运行TS脚本

方式二：安装ts-node：`npm install ts-node -g`

另外ts-node需要依赖 tslib 和 @types/node 两个包：`npm install tslib @types/node -g`

现在，我们可以直接通过 ts-node 来运行TypeScript的代码：`ts-node math.ts`





## TS数据类型

### 变量的声明

我们已经强调过很多次，在TypeScript中定义变量需要指定 标识符 的类型。

所以完整的声明格式如下：

- 声明了类型后TypeScript就会进行类型检测，声明的类型可以称之为类型注解；

  `var/let/const 标识符: 数据类型 = 赋值;`

比如我们声明一个message，完整的写法如下：

- 注意：这里的string是小写的，和String是有区别的

- string是TypeScript中定义的字符串类型，String是ECMAScript中定义的一个类

  ![image-20211129095421710](medias/image-20211129095421710.png)

如果我们给message赋值其他类型的值，那么就会报错：

![image-20211129095436967](medias/image-20211129095436967.png)



### 声明变量的关键字

在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义。

![image-20211129100734207](medias/image-20211129100734207.png)



当然，在tslint中并不推荐使用var来声明变量：

可见，在TypeScript中并不建议再使用var关键字了，主要原因和ES6升级后let和var的区别是一样的，var是没有块级作用域的，会引起很多的问题，这里不再展开探讨。

![image-20211129100809955](medias/image-20211129100809955.png)



### 变量的类型推导（推断）

在开发中，有时候为了方便起见我们并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过TypeScript本身的特性帮助我们推断出对应的变量类型：

![image-20211129100939068](medias/image-20211129100939068.png)

如果我们给message赋值123：

![image-20211129100950853](medias/image-20211129100950853.png)

这是因为在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型：

上面的message就是因为后面赋值的是一个string类型，所以message虽然没有明确的说明，但是依然是一个string类型；



### JS和TS的数据类型

我们经常说TypeScript是JavaScript的一个超集：

![image-20211129101151301](medias/image-20211129101151301.png)



#### number类型

数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点型（double），统一为number类型。

![image-20211129101302016](medias/image-20211129101302016.png)



如果你学习过ES6应该知道，ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十六进制的表示：

![image-20211129101316008](medias/image-20211129101316008.png)



#### boolean类型

boolean类型只有两个取值：true和false，非常简单

![image-20211129101336902](medias/image-20211129101336902.png)



#### string类型

string类型是字符串类型，可以使用单引号或者双引号表示：

![image-20211129101352560](medias/image-20211129101352560.png)

同时也支持ES6的模板字符串来拼接变量和字符串：

![image-20211129101405983](medias/image-20211129101405983.png)



#### Array类型

数组类型的定义也非常简单，有两种方式：

![image-20211129101421176](medias/image-20211129101421176.png)

如果添加其他类型到数组中，那么会报错：

![image-20211129101526166](medias/image-20211129101526166.png)



#### Object类型

object对象类型可以用于描述一个对象：

![image-20211129101543650](medias/image-20211129101543650.png)

但是从myinfo中我们不能获取数据，也不能设置数据：

![image-20211129101558993](medias/image-20211129101558993.png)

![image-20211129101601374](medias/image-20211129101601374.png)



#### Symbol类型

在ES5中，如果我们希望不可以在对象中添加相同的属性名称，可以使用下面的做法：

![image-20211129101658767](medias/image-20211129101658767.png)

通常我们的做法是定义两个不同的属性名字：比如identity1和identity2。

但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值：

![image-20211129101722811](medias/image-20211129101722811.png)



#### null和undefined类型

在 JavaScript 中，undefined 和 null 是两个基本数据类型。

在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型：

![image-20211129101808351](medias/image-20211129101808351.png)



#### TS类型-any

在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型（类似于Dart语言中的dynamic类型）。

any类型有点像一种讨巧的TypeScript手段：

- 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法；
- 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值；

![image-20211129101916388](medias/image-20211129101916388.png)

如果对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可以使用any：

包括在Vue源码中，也会使用到any来进行某些类型的适配；



#### TS类型-unknown

unknown是TypeScript中比较特殊的一种类型，它用于描述类型不确定的变量。

什么意思呢？我们来看下面的场景：

![image-20211129102039683](medias/image-20211129102039683.png)



![image-20211129102046636](medias/image-20211129102046636.png)



#### TS类型-void

void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型：

- 我们可以将null和undefined赋值给void类型，也就是函数可以返回null或者undefined

  ![image-20211129102138149](medias/image-20211129102138149.png)



这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void：

![image-20211129102217499](medias/image-20211129102217499.png)



#### TS类型-never

never 表示永远不会有值的类型，比如一个函数：

- 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？
- 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型；

![image-20211129102426168](medias/image-20211129102426168.png)



![image-20211129102434953](medias/image-20211129102434953.png)

如果我现在调用`handleMessage(true)`传了一个布尔类型的参数，那么肯定会有错误提示，然后我们会发现`message`并没有`boolean`的参数类型注解，添加之后我们此时可能会忘记在`switch..case`的结构体中添加对应的判断条件，编译的时候肯定会报错，我们又得根据提示信息来添加对应判断处理传递进来的布尔类型，此时如果使用`never`数据类型，明确`message`不会有值，那么如果我们忘记在`switch...case`中添加判断布尔类型的代码时，肯定会走到`default`分支，那么就会对`check`进行赋值，此时就会有错误提示，我们就能马上知道哪里有问题，不需要等到`ts`代码编译运行了才知道错误，在复杂的大型项目中还是能感受出来的，例如`Vue3`。





#### TS类型-tuple

tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等。

![image-20211129103255103](medias/image-20211129103255103.png)



那么tuple和数组有什么区别呢？

- 首先，数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组中）

- 其次，元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型；

![image-20211129103357188](medias/image-20211129103357188.png)



**Tuples的应用场景**

那么tuple在什么地方使用的是最多的呢？

tuple通常可以作为返回的值，在使用的时候会非常的方便；

![image-20211129103608102](medias/image-20211129103608102.png)



### 函数的参数类型

函数是JavaScript非常重要的组成部分，TypeScript允许我们**指定函数的参数和返回值的类型**。

参数的类型注解

- 声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型：

  ![image-20211129103932330](medias/image-20211129103932330.png)



### 函数的返回值类型

我们也可以添加返回值的类型注解，这个注解出现在函数列表的后面：

![image-20211129104618737](medias/image-20211129104618737.png)

和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型：

某些第三方库处于方便理解，会明确指定返回类型，但是这个看个人喜好；



### 匿名函数的参数

匿名函数与函数声明会有一些不同：

- 当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时；
- 该函数的参数会自动指定类型；

![image-20211129104828822](medias/image-20211129104828822.png)



我们并没有指定item的类型，但是item是一个string类型：

- 这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型；
- 这个过程称之为上下文类型（ contextual typing ），因为函数执行的上下文可以帮助确定参数和返回值的类型；



### 对象类型

如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢？

我们可以使用对象类型；

![image-20211129104950715](medias/image-20211129104950715.png)



在这里我们使用了一个对象来作为类型：

- 在对象我们可以添加属性，并且告知TypeScript该属性需要是什么类型；

- 属性之间可以使用 , 或者 ; 来分割，最后一个分隔符是可选的；
- 每个属性的类型部分也是可选的，如果不指定，那么就是any类型；



### 可选类型

对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个?：

![image-20211129105420351](medias/image-20211129105420351.png)



### 联合类型

TypeScript的类型系统允许我们使用多种运算符，从现有类型中构建新类型。

我们来使用第一种组合类型的方法：联合类型（Union Type）

- 联合类型是由两个或者多个其他类型组成的类型；
- 表示可以是这些类型中的任何一个值；
- 联合类型中的每一个类型被称之为联合成员（union's  members ）；

![image-20211129105632572](medias/image-20211129105632572.png)



### 使用联合类型

传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可

- 但是我们拿到这个值之后，我们应该如何使用它呢？因为它可能是任何一种类型。
- 比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法；

那么我们怎么处理这样的问题呢？

- 我们需要使用缩小（narrow）联合（后续我们还会专门讲解缩小相关的功能）；
- TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型；

![image-20211129105730856](medias/image-20211129105730856.png)



### 可选类型补充

其实上，可选类型可以看做是 类型 和 undefined 的联合类型：

![image-20211129105829595](medias/image-20211129105829595.png)



### 类型别名

在前面，我们通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多次。

比如我们可以给对象类型起一个别名：

![image-20211129105956181](medias/image-20211129105956181.png)



![image-20211129105958872](medias/image-20211129105958872.png)



### 类型断言as

**概念**

类型断言：可以用来手动指定一个值的类型。

有时候TypeScript无法获取具体的类型信息，这个我们需要使用类型断言（Type Assertions）。

**语法**

```typescript
值 as 类型
或者
<类型>值
```

推荐使用`值 as 类型`语法,因为后者在`jsx`中有问题。

**用途**

**将一个联合类型断言为其中一个类型**

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型中共有的属性或方法**：

```typescript
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

```typescript
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.
```

上面的例子中，获取 `animal.swim` 的时候会报错。

此时可以使用类型断言，将 `animal` 断言成 `Fish`：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```

这样就可以解决访问 `animal.swim` 时报错的问题了。

需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`
```

上面的例子编译时不会报错，但在运行时会报错：

```autoit
Uncaught TypeError: animal.swim is not a function`
```

原因是 `(animal as Fish).swim()` 这段代码隐藏了 `animal` 可能为 `Cat` 的情况，将 `animal` 直接断言为 `Fish` 了，而 TypeScript 编译器信任了我们的断言，故在调用 `swim()` 时没有编译错误。

可是 `swim` 函数接受的参数是 `Cat | Fish`，一旦传入的参数是 `Cat` 类型的变量，由于 `Cat` 上没有 `swim` 方法，就会导致运行时错误了。

总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。



**其他例子**

比如我们通过 document.getElementById，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它具体的类型：

![image-20211201022910203](medias/image-20211201022910203.png)



TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换：

![image-20211201023138504](medias/image-20211201023138504.png)

![image-20211201023148303](medias/image-20211201023148303.png)

> 更具体的意思就是 string,number这种类型；
>
> 不太具体的意思就是 unknown这种类型。





### 非空类型断言!

当我们编写下面的代码时，在执行ts的编译阶段会报错：

这是因为传入的message有可能是为undefined的，这个时候是不能执行方法的；

![image-20211201023359019](medias/image-20211201023359019.png)



但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言：

非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测；

![image-20211201023453750](medias/image-20211201023453750.png)

> 如果是明确有值，那为什么还要设置成可选参数啊，直接强制要求传参不就行了？
>
> 这个知识点需要多看案例反复理解。



### 可选链的使用

可选链事实上并不是TypeScript独有的特性，它是ES11（ES2020）中增加的特性：

- 可选链使用可选链操作符 ?.；
- 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行；
- 虽然可选链操作是ECMAScript提出的特性，但是可以在TypeScript一起使用；

![image-20211201024043874](medias/image-20211201024043874.png)



![image-20211201024046682](medias/image-20211201024046682.png)



![image-20211201024049480](medias/image-20211201024049480.png)



### ??和!!的作用

有时候我们还会看到 !! 和 ?? 操作符，这些都是做什么的呢？

!!操作符：

- 将一个其他类型转换成boolean类型；
- 类似于Boolean(变量)的方式；

??操作符：

- 它是ES11增加的新特性；
- 空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数；

![image-20211201025027848](medias/image-20211201025027848.png)

![image-20211201025032631](medias/image-20211201025032631.png)

> ??操作符类似于||操作符，都可以给某个变量设置默认值,但是还是有区别的，短路或运算符是根据左侧是否为布尔类型的值来决定返回值的，?? 运算符是根据左侧是否为 null 或者 undefined 来决定返回值的。



### 字面量类型

除了前面我们所讲过的类型之外，也可以使用字面量类型（literal types）：

![image-20211201025434583](medias/image-20211201025434583.png)

那么这样做有什么意义呢？

默认情况下这么做是没有太大的意义的，但是我们可以将多个类型联合在一起；

![image-20211201025446650](medias/image-20211201025446650.png)

> 传参的时候必须是定义的字面量类型的值，否则报错。
>
> TypeScript 有点繁琐，可能是我习惯了"自由"。

### 字面量推理

![image-20211201025518745](medias/image-20211201025518745.png)

这是因为我们的对象在进行字面量推理的时候，info其实是一个 {url: string, method: string}，所以我们没办法将
一个 string 赋值给一个 字面量 类型。

![image-20211201025644868](medias/image-20211201025644868.png)

![image-20211201025647981](medias/image-20211201025647981.png)

> 解决方法1：就是通过类型断言确定具体的类型，确定 method 类型为 'GET' 类型；
>
> 解决方法2：增加`as const` 表示会对info对象进行字面量类型推理,这是另外一种解决方法。



### 类型缩小

什么是类型缩小呢？

- 类型缩小的英文是 Type Narrowing；
- 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径；
- 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小;
- 而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

常见的类型保护有如下几种：

- typeof
- 平等缩小（比如===、!==）
- instanceof
- in
- ...



#### typeof

在 TypeScript 中，检查返回的值typeof是一种类型保护：因为 TypeScript 对如何typeof操作不同的值进行编码。

![image-20211201030036100](medias/image-20211201030036100.png)



#### 平等缩小

我们可以使用Switch或者相等的一些运算符来表达相等性（比如===, !==, ==, and != ）：

![image-20211201030159494](medias/image-20211201030159494.png)

或者使用 `if (direction === 'left') {console.log("调用left方法")}`



#### instanceof

JavaScript 有一个运算符来检查一个值是否是另一个值的“实例”：

![image-20211201030614153](medias/image-20211201030614153.png)



#### in

Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in运算符

如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；

![image-20211201030906165](medias/image-20211201030906165.png)



## 函数

### TypeScript函数类型

在JavaScript开发中，函数是重要的组成部分，并且函数可以作为一等公民（可以作为参数，也可以作为返回值进行传递）。

那么在使用函数的过程中，函数是否也可以有自己的类型呢？

我们可以编写函数类型的表达式（Function Type Expressions），来表示函数类型；

![image-20211201031001302](medias/image-20211201031001302.png)



### TypeScript函数类型解析

在上面的语法中 (num1: number, num2: number) => void，代表的就是一个函数类型：

- 接收两个参数的函数：num1和num2，并且都是number类型；
- 并且这个函数是没有返回值的，所以是void；

在某些语言中，可能参数名称num1和num2是可以省略，但是TypeScript是不可以的：

![image-20211201031132987](medias/image-20211201031132987.png)



### 参数的可选类型

我们可以指定某个参数是可选的：

![image-20211201031220712](medias/image-20211201031220712.png)

这个时候这个参数x依然是有类型的，它是什么类型呢？ number | undefined

![image-20211201032401722](medias/image-20211201032401722.png)

另外可选类型需要在必传参数的后面：

![image-20211201032415311](medias/image-20211201032415311.png)



### 默认参数

从ES6开始，JavaScript是支持默认参数的，TypeScript也是支持默认参数的：

![image-20211201032456311](medias/image-20211201032456311.png)

这个时候y的类型其实是 undefined 和 number 类型的联合。



### 剩余参数

从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中。

![image-20211201032632515](medias/image-20211201032632515.png)



### 可推导的this类型

this是JavaScript中一个比较难以理解和把握的知识点：

我在公众号也有一篇文章专门讲解this：https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA；

因为this在不同的情况下会绑定不同的值，所以对于它的类型就更难把握了；

那么，TypeScript是如何处理this呢？我们先来看一个例子：

![image-20211201033339058](medias/image-20211201033339058.png)

上面的代码是可以正常运行的，也就是TypeScript在编译时，认为我们的this是可以正确去使用的：

TypeScript认为函数 sayHello 有一个对应的this的外部对象 info，所以在使用时，就会把this当做该对象。



### 不确定的this类型

但是对于某些情况来说，我们并不知道this到底是什么？

![image-20211201033436365](medias/image-20211201033436365.png)

这段代码运行会报错的：

- 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全；
- 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的；
- 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来调用函数；

 

### 指定this的类型

这个时候，通常TypeScript会要求我们明确的指定this的类型：

![image-20211201033636249](medias/image-20211201033636249.png)

> 调用sayHello函数的时候必须要求this是指向包含name属性的对象的，必须被包含name属性的对象调用，否则编译不通过。



### 函数的重载

在TypeScript中，如果我们编写了一个add函数，希望可以对字符串和数字类型进行相加，应该如何编写呢？

我们可能会这样来编写，但是其实是错误的：

![image-20211201034037705](medias/image-20211201034037705.png) 

那么这个代码应该如何去编写呢？

- 在TypeScript中，我们可以去编写不同的重载签名（ overload signatures ）来表示函数可以以不同的方式进行调用；
- 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；

> 函数重载：函数名称相同，但是参数不同的几个函数，就是函数重载。
>
> 使用了函数重载，那么在实现函数体时函数类型应该使用any。
>
> 能使用联合类型就直接使用联合类型，如果联合类型实现起来麻烦，才考虑使用函数重载。



### sum函数的重载

比如我们对sum函数进行重构：

在我们调用sum的时候，它会根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名；

![image-20211201034152318](medias/image-20211201034152318.png)

但是注意，有实现体的函数，是不能直接被调用的：

![image-20211201034201451](medias/image-20211201034201451.png)



### 联合类型和重载

我们现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度。

这里有两种实现方案：

- 方案一：使用联合类型来实现；
- 方案二：实现函数重载来实现；

![image-20211201034510641](medias/image-20211201034510641.png)

![image-20211201034513348](medias/image-20211201034513348.png)

在开发中我们选择使用哪一种呢？尽量选择使用联合类型来实现！



## 类

### 认识类的使用

在早期的JavaScript开发中（ES5）我们需要通过函数和原型链来实现类和继承，从ES6开始，引入了class关键字，可以更加方便的定义和使用类。

TypeScript作为JavaScript的超集，也是支持使用class关键字的，并且还可以对类的属性和方法等进行静态类型检测。

实际上在JavaScript的开发过程中，我们更加习惯于函数式编程：

- 比如React开发中，目前更多使用的函数组件以及结合Hook的开发模式；
- 比如在Vue3开发中，目前也更加推崇使用 Composition API；

但是在封装某些业务的时候，类具有更强大封装性，所以我们也需要掌握它们。



类的定义我们通常会使用class关键字：

- 在面向对象的世界里，任何事物都可以使用类的结构来描述；
- 类中包含特有的属性和方法；



### 类的定义

我们来定义一个Person类：

![image-20211201034907450](medias/image-20211201034907450.png)

使用class关键字来定义一个类；

我们可以声明一些类的属性：在类的内部声明类的属性以及对应的类型

-  如果类型没有声明，那么它们默认是any的；
-  我们也可以给属性设置初始化值；
-  在默认的strictPropertyInitialization模式下面我们的属性是必须初始化的，如果没有初始化，那么编译时就会报错；
-  如果我们在strictPropertyInitialization模式下确实不希望给属性初始化，可以使用 name!: string语法；
-  类可以有自己的构造函数constructor，当我们通过new关键字创建一个实例时，构造函数会被调用；
-  构造函数不需要返回任何值，默认返回当前创建出来的实例；
-  类中可以有自己的函数，定义的函数称之为方法；

> TS严格模式下定义的类时，一定要对类中的属性初始化值，否则会报错，可以在定义的时候初始化，也可以在constructor中初始化。

### 类的继承

面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提。

我们使用extends关键字来实现继承，子类中使用super来访问父类。

我们来看一下Student类继承自Person：

- Student类可以有自己的属性和方法，并且会继承Person的属性和方法；
- 在构造函数中，我们可以通过super来调用父类的构造方法，对父类中的属性进行初始化；

![image-20211201035331330](medias/image-20211201035331330.png)

![image-20211201035333872](medias/image-20211201035333872.png)

`

### 类的成员修饰符

在TypeScript中，类的属性和方法支持三种修饰符： public、private、protected

- public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的；
- private 修饰的是仅在同一类中可见、私有的属性或方法；
- protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法；

public是默认的修饰符，也是可以直接访问的，我们这里来演示一下protected和private。

![image-20211201035608750](medias/image-20211201035608750.png)

![image-20211201035611417](medias/image-20211201035611417.png)



### 只读属性readonly

如果有一个属性我们不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用readonly：

![image-20211201040246799](medias/image-20211201040246799.png)



### getters/setters

在前面一些私有属性我们是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，这个时候我们可以使用存取器。

![image-20211201040343529](medias/image-20211201040343529.png)

![image-20211201040346045](medias/image-20211201040346045.png)



### 静态成员

#### 静态方法

使用 `static` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

```typescript
class Animal {
  name: string;
  constructor(name) {
    this.name = name
  }
  static isAnimal(a) {
    return a instanceof Animal
  }
}
let a = new Animal('Jack')
console.log(a.name)
// console.log(a.isAnimal) // 无法通过实例访问静态成员
console.log(Animal.isAnimal(a))
```





#### 静态属性

ES7 提案中，可以使用 `static` 定义一个静态属性：

```js
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```



#### ES7 中类的用法

ES6 中实例的属性只能通过构造函数中的 `this.xxx` 来定义，ES7 提案中可以直接在类里面定义：

```typescript
class Animal {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let a = new Animal();
console.log(a.name); // Jack
```



### 抽象类abstract

我们知道，继承是多态使用的前提。

- 所以在定义很多通用的调用接口时, 我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式。
- 但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，我们可以定义为抽象方法。

什么是 抽象方法? 在TypeScript中没有具体实现的方法(没有方法体)，就是抽象方法。

- 抽象方法，必须存在于抽象类中；
- 抽象类是使用abstract声明的类；

抽象类有如下的特点：

- 抽象类是不能被实例化的（也就是不能通过new创建）
- 抽象方法必须被子类实现，否则该类必须是一个抽象类；



### 抽象类演练

```typescript
/* 
  通过抽象类实现计算不同几何图形的面积
*/

function makeArea(shape: Shape) {
  return shape.getArea()
}


// 创建几何图形抽象类
abstract class Shape {
  // 创建计算几何图形面积的抽象方法
  abstract getArea(): number
}

// 子类继承抽象类并且实现getArea抽象方法
class Rectangle extends Shape {
  private width: number
  private height: number
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))


```



### 类的类型

类本身也是可以作为一种数据类型的：

```typescript
class Person {
  name: string = "123"
  eating() {
    console.log('eating')
  }
}

const p = new Person()
p.eating()
const p1: Person = {
  name: "Alex",
  eating() {
    console.log(`${this.name} eating`)
  }
}
console.log(p1.name)
p1.eating()

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({ name: "Jack", eating: function () { } })

export { }

```



## 接口

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

### 什么是接口

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象](https://ts.xcatliu.com/advanced/class-and-interfaces.html#类实现接口)以外，也常用于对「对象的形状（Shape）」进行描述。



### 接口的声明

在前面我们通过type可以用来声明一个对象类型：

![image-20211212135233015](medias/image-20211212135233015.png)

对象的另外一种声明方式就是通过接口来声明：

![image-20211212135238242](medias/image-20211212135238242.png)

他们在使用上的区别，我们后续再来说明。



### 可选属性

接口中我们也可以定义可选属性:

![image-20211212135314092](medias/image-20211212135314092.png)



### 只读属性

接口中也可以定义只读属性：

这样就意味着我们再初始化之后，这个值是不可以被修改的；

![image-20211212135703508](medias/image-20211212135703508.png)

![image-20211212135705594](medias/image-20211212135705594.png)



### 索引类型

前面我们使用interface来定义对象类型，这个时候其中的属性名、类型、方法都是确定的，但是有时候我们会遇到类似下面的对象：

![image-20211212140231771](medias/image-20211212140231771.png)

![image-20211212140234548](medias/image-20211212140234548.png)



```typescript
// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}


interface ILanguageYear {
  [name: string]: number
}

const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
```



### 函数类型

前面我们都是通过interface来定义对象中普通的属性和方法的，实际上它也可以用来定义函数类型：

![image-20211212141129971](medias/image-20211212141129971.png)

当然，除非特别的情况，还是推荐大家使用类型别名来定义函数：

![image-20211212141150328](medias/image-20211212141150328.png)

```typescript
// 使用type定义函数类型
// type CalcFn = (n1: number, n2: number) => number

// 使用接口定义
interface CalcFn {
  // (参数类型): 返回值类型
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

const res = calc(20, 30, add)
console.log("[*] res: ", res)

```



### 接口继承

接口和类一样是可以进行继承的，也是使用extends关键字：

并且我们会发现，接口是支持多继承的（类不支持多继承）

![image-20211212142207512](medias/image-20211212142207512.png)

![image-20211212142209417](medias/image-20211212142209417.png)

> 某个接口继承多个接口之后，在创建对象时必须将继承的多个接口的属性和方法全部实现。



### 交叉类型

前面我们学习了联合类型：联合类型表示多个类型中一个即可。

![image-20211212143231077](medias/image-20211212143231077.png)



还有另外一种类型合并，就是交叉类型（Intersection Types）：

- 交叉类似表示需要满足多个类型的条件；
- 交叉类型使用 & 符号；

我们来看下面的交叉类型：

- 表达的含义是number和string要同时满足；
- 但是有同时满足是一个number又是一个string的值吗？其实是没有的，所以MyType其实是一个never类型；

![image-20211212143341060](medias/image-20211212143341060.png)



### 交叉类型的应用

所以，在开发中，我们进行交叉时，通常是对对象类型进行交叉的：

![image-20211212143413858](medias/image-20211212143413858.png)



```typescript
// 一种组合类型的方式：联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"

// 另一种组合类型的方式：交叉类型
type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() { }
}

const obj2: MyType2 = {
  flying() { },
  // 只写一个会报错，ISwim和IFly中的方法全部都得实现
  swimming() { }
}


export { }
```



### 接口的实现

接口定义后，也是可以被类实现的：

- 如果被一个类实现，那么在之后需要传入接口的地方，都可以将这个类的实例对象传入；
- 这就是面向接口开发；

![image-20211212145016860](medias/image-20211212145016860.png)

![image-20211212145019872](medias/image-20211212145019872.png)



### interface和type区别

我们会发现interface和type都可以用来定义对象类型，那么在开发中定义对象类型时，到底选择哪一个呢？

- 如果是定义非对象类型，通常推荐使用type，比如Direction、Alignment、一些Function；

如果是定义对象类型，那么他们是有区别的：

- interface 可以重复的对某个接口来定义属性和方法；
- 而type定义的是别名，别名是不能重复的；

![image-20211212145549198](medias/image-20211212145549198.png)

![image-20211212145551354](medias/image-20211212145551354.png)

```typescript
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: "Jack",
  age: 10
}

/* 
  interface的名称可以重复定义，每次定义都会合并之前定义的接口,从而实现拓展接口中的属性
*/

// type IBar = {
//   name: string
//   age: number
// }

// type IBar = {
  
// }

/* 
  type别名不能重复定义,因此无法实现合并属性，拓展功能
*/
```



### 字面量赋值

我们来看下面的代码：

![image-20211212233406884](medias/image-20211212233406884.png)

直接赋值一个对象给`p`,如果这个对象里面有接口中未定义的属性,则 TS 会直接报错的。

下面将对象先赋值给一个变量，然后再赋值给`obj`就能欺骗 TS，虽然不会报错，但是会进行擦除操作，当`obj.age`获取值的时候还是会报错。

![image-20211212233411802](medias/image-20211212233411802.png)

另一个案例:

```typescript
interface IPerson {
  name: string
  age: number
  isGirl: boolean
}

const info = {
  name: "Alex",
  age: 12,
  isGirl: false,
  address: "广州市"
}

const p: IPerson = info
console.log("info: ", info)
console.log("p: ", p)
// 拿不到address属性,因为ts在进行字面量赋值的时候会进行freshness擦除操作,将address删除了
// console.log("p.address: ", p.address)
```

这是因为TypeScript在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制。

但是之后如果我们是将一个 变量标识符 赋值给其他的变量时，会进行freshness擦除操作。

这是一个值得注意的细节，也算是一个小坑。



### TypeScript枚举类型

枚举类型是为数不多的TypeScript特性有的特性之一：

- 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
- 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；

![image-20211213091502391](medias/image-20211213091502391.png)

![image-20211213091504536](medias/image-20211213091504536.png)



**枚举类型的值**

枚举类型默认是有值的，比如上面的枚举，默认值是这样的：

![image-20211213101552629](medias/image-20211213101552629.png)

当然，我们也可以给枚举其他值：

![image-20211213101610091](medias/image-20211213101610091.png)

这个时候会从100进行递增；

我们也可以给他们赋值其他的类型：

![image-20211213101619246](medias/image-20211213101619246.png)



## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，**不预先指定具体的类型**，而在**使用的时候再指定类型**的一种特性。

比如我们可以通过函数来封装一些API，通过传入不同的函数参数，让函数帮助我们完成不同的操作；但是对于参数的类型是否也可以参数化呢？

什么是类型的参数化？我们来提一个需求：封装一个函数，传入一个参数，并且返回这个参数；

如果我们是TypeScript的思维方式，要考虑这个参数和返回值的类型需要一致：

![image-20211213103350467](medias/image-20211213103350467.png)

上面的代码虽然实现了，但是不适用于其他类型，比如string、boolean、Person等类型：

![image-20211213103359627](medias/image-20211213103359627.png)



### 泛型实现类型参数化

虽然any是可以的， 但是定义为any的时候，我们其实已经丢失了类型信息：

- 比如我们传入的是一个number，那么我们希望返回的可不是any类型，而是number类型；

- 所以，我们需要在函数中可以捕获到参数的类型是number，并且同时使用它来作为返回值的类型；

我们需要在这里使用一种特性的变量 - 类型变量（type variable），它作用于类型，而不是值：

![image-20211213103934004](medias/image-20211213103934004.png)

这里我们可以使用两种方式来调用它：

方式一：通过 <类型> 的方式将类型传递给函数；

![image-20211213103958131](medias/image-20211213103958131.png)

方式二：通过类型推到，自动推到出我们传入变量的类型：

在这里会推导出它们是 字面量类型 的，因为字面量类型对于我们的函数也是适用的

![image-20211213104007548](medias/image-20211213104007548.png)



### 泛型的基本补充

当然我们也可以传入多个类型：

![image-20211213104056818](medias/image-20211213104056818.png)

平时在开发中我们可能会看到一些常用的名称：

- T：Type的缩写，类型
- K、V：key和value的缩写，键值对
- E：Element的缩写，元素
- O：Object的缩写，对象

```typescript
function foo<T, E, O>(arg1: T, arg2: E, arg3?: O, ...args: T[]) {
  console.log(arg1, arg2, arg3)
  console.log("剩余参数: ", args)
}

// 剩余参数只能使用第一个参数的类型，下面例子的剩余参数的类型只能是number类型
foo<number, string, { name: string }>(10, 'abc', { name: "Alexander" }, 11, 12, 13)

export { }
```



### 泛型接口

```typescript
interface IPerson<T1, T2> {
  name: T1;
  age: T2
}

const p: IPerson<string, number> = {
  name: "Alexander",
  age: 18
}

console.log(p)

// 设置泛型接口默认类型为 string，如果调用接口的时候不传类型默认就是string，否则就使用传过来的类型
interface IFoo<T = string> {
  initialValue: T,
  valueList: T[],
  handleValue: (value: T) => void
}

// 此处传递了number类型,覆盖IFoo默认的string类型
const foo: IFoo<number> = {
  initialValue: 0,
  valueList: [0, 1, 2, 3],
  handleValue: function (value) {
    console.log(value)
  }
}

console.log(foo)
foo.handleValue(123)
```



### 泛型类

```typescript
class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

// 根据类型推导得出类型为string
const p1 = new Point('string', '666', 'true')
// 手动传递类型
const p2 = new Point<string>('string', '666', 'true')
// p3是一个Point类型,构造函数的参数为string类型
const p3: Point<string> = new Point('string', '666', 'true')
console.log(p1)
console.log(p2)
console.log(p3)
```



### 泛型约束

有时候我们希望传入的类型有某些共性，但是这些共性可能不是在同一种类型中：

比如string和array都是有length的，或者某些对象也是会有length属性的；

那么只要是拥有length的属性都可以作为我们的参数类型，那么应该如何操作呢？

```typescript
interface ILength {
  length: number
}

// arg参数必须有number类型的length属性;泛型通过extends关键字配合接口就可以实现类型约束;
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

console.log(getLength("abc"));
console.log(getLength(["abc", "cba"]));
console.log(getLength({ length: 100 }));

```





## 模块化开发

TypeScript支持两种方式来控制我们的作用域：

- 模块化：每个文件可以是一个独立的模块，支持ES Module，也支持CommonJS；
- 命名空间：通过namespace来声明一个命名空间

![image-20211213124708397](medias/image-20211213124708397.png)



## 命名空间

命名空间在TypeScript早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题。

```typescript
/* 
  默认情况下我们不能定义2个名称相同的模块，但是特殊情况我们希望定义怎么办？
  此时可以使用namespace关键字进行包裹。
*/

/* export function format(time: string) {
  return "2021-12-13 12:36:15"
}

export function format(price: number) {
  return price.toFixed(2)
} */

export namespace time {
  // 格式化时间
  export function format(time: number) {
    return new Date(time)
  }
}

export namespace price {
  // 格式化价格
  export function format(price: number) {
    return price.toFixed(2)
  }
}
```

调用：

```typescript
console.log(time.format(Date.now()))
console.log(price.format(19))
```



## 类型的查找

之前我们所有的typescript中的类型，几乎都是我们自己编写的，但是我们也有用到一些其他的类型：

![image-20211213124849895](medias/image-20211213124849895.png)

大家是否会奇怪，我们的HTMLImageElement类型来自哪里呢？甚至是document为什么可以有getElementById的方法呢？

其实这里就涉及到typescript对类型的管理和查找规则了。

我们这里先给大家介绍另外的一种typescript文件：.d.ts文件

- 我们之前编写的typescript文件都是 .ts 文件，这些文件最终会输出 .js 文件，也是我们通常编写代码的地方；
- 还有另外一种文件 .d.ts 文件，它是用来做类型的声明(declare)。 它仅仅用来做类型检测，告知typescript我们有哪些类型；



那么typescript会在哪里查找我们的类型声明呢？

- 内置类型声明；
- 外部定义类型声明；
- 自己定义类型声明；



### 内置类型声明

内置类型声明是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件；

包括比如Math、Date等内置类型，也包括DOM API，比如Window、Document等；

内置类型声明通常在我们安装typescript的环境中会带有的；

https://github.com/microsoft/TypeScript/tree/main/lib



### 外部定义类型声明和自定义声明

外部类型声明通常是我们使用一些库（比如第三方库）时，需要的一些类型声明。

这些库通常有**两种**类型声明方式：

1. 在自己库中进行类型声明（编写.d.ts文件），比如axios

2. 通过社区的一个公有库DefinitelyTyped存放类型声明文件

   该库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/

   该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=

   比如我们安装react的类型声明： npm i @types/react --save-dev



什么情况下需要自己来定义声明文件呢？

- 我们使用的第三方库是一个纯的JavaScript库，没有对应的声明文件；比如lodash
- 我们给自己的代码中声明一些类型，方便在其他地方直接进行使用；



### 声明变量-函数-类

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>

  <script>
    let username = "Alexander";
    let age = 18;
    let isLogin = true;

    function getPwd() {
      return Date.now();
    }

    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }
  </script>
</html>

```

`main.ts`

```typescript
console.log(username)
console.log(age)
console.log(isLogin)
console.log(getPwd())
const p1 = new Person('惠兰', 18)
console.log(p1)
```

`statement.d.ts`

```typescript
// 声明变量/函数/类
declare let username: string
declare let age: number
declare let isLogin: boolean
declare function getPwd(): void
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}
```



### 声明模块

我们也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块：

```typescript
// 声明模块
declare module 'loadsh' {
  export function join(arr: any[]): void
}
```

声明模块的语法: declare module '模块名' {}。

在声明模块的内部，我们可以通过 export 导出对应库的类、函数等。



### 声明文件

在某些情况下，我们也可以声明文件：

- 比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；
- 比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；

![image-20211213131452956](medias/image-20211213131452956.png)



### declare命名空间

比如我们在index.html中直接引入了jQuery：

CDN地址： https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js

 我们可以进行命名空间的声明：

![image-20211213133526173](medias/image-20211213133526173.png)

```typescript
// 声明命名空间
// declare namespace 声明（含有子属性的）全局对象
declare namespace $ {
  export function ajax(settings: any): void
}
```



在main.ts中就可以使用了：

![image-20211213133531133](medias/image-20211213133531133.png)



### tsconfig.json文件

tsconfig.json是用于配置TypeScript编译时的配置选项：https://www.typescriptlang.org/tsconfig/

这里讲解几个比较常见的：

![image-20211213134553451](medias/image-20211213134553451.png)

![image-20211213134624537](medias/image-20211213134624537.png)





## 参考资料
- https://ts.xcatliu.com/
- https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html



