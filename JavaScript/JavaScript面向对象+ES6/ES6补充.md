### 1.Symbol

Symbol主要的作用是实现属性私有化。



### 2.var、let、const

#### 1.区别是什么？

1. var存在变量提升,在声明变量前使用的话值为undefined，let没有变量提升，如果在声明之前使用就会报错。
2. let和const存在暂时性死区的概念，var没有。
3. let、const不允许重复声明，var允许。
4. let，const有块级作用域，var没有。
5. const声明的常量一旦声明就不能修改，let和var可以修改变量。
6. const声明常量后必须马上赋值，let和var则不用。
7. const声明的复杂数据类型常量（Object，Array）中的属性可以修改，如果要冻结只能冻结一层，如果要冻结多层的话需要使用递归的方式。
8. var会把变量挂载到顶层对象属性中（window、this、self、top），let、const则不会。

更多详细内容：<https://es6.ruanyifeng.com/#docs/let>

### 3.解构赋值

数组在解构的时候要注意一一对应的关系。



### 4.字符串扩展

unicode是utf-8的一种实现。





### 5.模板字符串

1. 保持格式化
2. 变量表达式解析
   1. 不支持语句（for，while）



### 6.数值扩展







### 7.对象简介表达法

js中对象的key必须是一个字符串。



### 8.迭代

1. for...in打印的是数组的下标
2. for...of打印的是数组的值



### 9.函数拓展

#### 箭头函数

箭头函数和普通函数的this指向问题

普通函数的this没有默认指向，换句话说就是普通函数在创建期间this根本没有值，this的指向取决于调用的环境，如果是自调用，那么指向window，如果是对象调用，那么this就指向这个调用的对象。



*setTimeout定时器中的this指向的是window对象。*



1. 箭头函数不能通过new的方式创建，因为作为构造函数
2. 箭头函数没有arguments对象
3. 不能作为生成器函数
4. 内部this对象指向创建期上下文对象



*箭头函数的this是声明期间绑定的，普通函数的this是执行期间绑定的。*



### 10.内置对象

#### Array

##### 1.includes

返回布尔值

##### 2.forEach

##### 3.every

##### 4.filter

##### 5.map

##### 6.reduce



#### Object

##### 1.assign

浅拷贝

##### 2.create

用于创建对象原型

##### 3.freeze

##### 4.Object.defineProperty



#### Set集合数据结构

1. 类似数组，值是无序的
2. 无重复值



#### Map字典数据结构

```javascript
 <script>
    // 1 如何创建一个Map
    const map = new Map([
      ['a', 1],
      ['b', 2]
    ])
    console.log(map);

    // 2 Map类的属性
    console.log(map.size);

    // 3 Map类的方法
    // 3.1 set(key,value)方法
    map.set('miaov', 'ketang').set('new', 'fq').set('miaov', 'ketang');

    // 3.2 get(key)方法,读取key对应的值,如果找不到就返回undefined
    map.get('miaov');
    map.get('test')

    // 3.3 delete(key) 删除某个键,返回true，如果删除失败，返回false
    console.log(map.delete('a'));
    console.log(map);
    console.log(map.delete('a'));

    // 3.4 has(key)方法返回一个布尔值,表示某个键是否在当前Map对象之中。
    console.log(map.has('a')); // false
    console.log(map.has('miaov')); // true

    // 3.5 clear()清除所有数据，没有返回值。
    // console.log(map.clear())

    // 3.6 keys() 返回键名的遍历器
    console.log('keys: ', map.keys());

    // 3.7 values() 返回每个键对应值的遍历器
    console.log('values: ', map.values());

    // 3.8 entries() 返回键值对的遍历器
    console.log("entries: ", map.entries());

    // 3.9 forEach() 使用回调函数遍历每个成员
    map.forEach((item, index, map) => {
      console.log(`>>: ${item}--${index}--${index + 123}`)
    })

    // 4. map在使用过程中的一些注意事项：
    map.set(NaN, 10).set(NaN, 100);
    console.log(map);


    map.set({}, 'x').set({}, 'y');
    console.log(map)
    console.log({} === {}); // false 引用数据类型比对的是内存地址而不是值

    // map里面的key的顺序排列是按照添加顺序排列的。
  </script>
```



#### Iterator迭代器

```javascript
    /* 
      Iterator遍历器的作用：
      1.为各种数据结构，提供一个统一的、简便的访问接口。
      2.使得数据结构的成员能够按某种次序排列
      3.ES6新增了遍历命令for...of循环，Iterator接口主要供for...of消费。
     */


    // 1 手写Iterator接口
    // const arr = [0,1, 2, 3];

    // function iterator(arr) {
    //   let index = 0;
    //   return {
    //     next: function () {
    //       return index < arr.length ? {
    //         value: arr[index++],
    //         done: false
    //       } : {
    //         value: undefined,
    //         done: true
    //       }
    //     }
    //   }
    // }
    // const it = iterator(arr);
    // console.log(it.next())
    // console.log(it.next())
    // console.log(it.next())
    // console.log(it.next())
    // console.log(it.next())

    // 2 凡是具有 Symbol.iterator 属性的数据结构都具有Iterator接口
    const arr = [1,2,3];
    const set = new Set(['a','b','c']);
    const map = new Map([['a', 1]]);

    const itArr = arr[Symbol.iterator]();
    const itSet = set[Symbol.iterator]();
    const itMap = map[Symbol.iterator]();

    console.log(itSet.next());  // {value: "a", done: false}
    console.log(itSet.next());  // {value: "b", done: false}
    console.log(itSet.next());  // {value: "c", done: false}
    console.log(itSet.next());  // {value: undefined, done: true}

    const obj = {};
    console.log(obj[Symbol.iterator]);    // undefined 因为obj数据类型不是一个可迭代对象,所以没有Symbol.iterator属性

  /* 
      3 具备iterator接口的数据结构都可以进行如下操作
        1.解构赋值
        2.拓展运算
   */

  let [x, y] = set;
  console.log(x,y);   // a,b

  let str = '吃透javascript';
  console.log([...str])

  const arr2 = [{}, 1, 'a', 1, 'a', 'b', [], function(){console.log(' comming ')}];
  console.log('去重前: ', arr2)
  console.log('去重后: ', [...new Set(arr2)]);
  arr2[arr2.length-1]();


  /* 
      4 for...of循环
   */

  const ofArr = [1,2,3,4];
  for(let i of ofArr) {
    console.log(i)
  }

  const m = new Map();
  m.set('a', 1).set('b', 2).set('c', 3);
  for(let [key,value] of m) {
    console.log(key, value)
  }

  </script>
```

思考一下，如何给一个不具备iterator接口的数据结构部署一个iterator接口？

```javascript
const d = {
    '0': 'm',
    '1': 'i',
    '2': 'a',
    '3': 'o',
    '4': 'v'
}
```

解决思路：手动给这个数据结构添加Symbol.iterator属性



### 14.面向对象编程

#### 1.ES6中class的基本使用

```javascript
<script>
    /* 
    JS语言的传统方法是通过构造函数，定义并生成新对象，是一种基于原型的面向对象系统。
    这种写法跟传统的面向对象语言（C++/Java）差异很大，很容易让新学习这门语言的人感到困惑。所以，在ES6中新增加了类的概念，
    可以使用class 关键字声明一个类，之后以这个类来实例化对象。
    注意：ES5是没有类的概念的。
     */

    // const Miaov = function (a, b) {
    //   this.a = a;
    //   this.b = b;
    //   return this;
    // };
    // Miaov.prototype = {
    //   constructor: Miaov,
    //   print: function () {
    //     console.log(this.a + ' ' + this.b);
    //   }
    // };

    // const miaov = new Miaov('hello world').print();

    // ES6中创建对象
    class Miaov {
      constructor(a, b) {
        this.a = a;
        this.b = b;
        return this;
      }
      print() {
        console.log(this.a + '' + this.b);
      }
    };

    const miaov = new Miaov('hello', 'world').print();
    console.log(typeof Miaov); // function

    /* 
      1. Miaov中的constructor方法是构造方法，this关键字则代表实例对象。也就是说，ES5的构造函数Miaov，对应ES6的Miaov这个类的构造方法。

      2. Miaov这个类除了构造方法，还定义了一个print方法。注意，定义‘类’的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去就可以了。
      另外，方法之间不需要加逗号分隔，加了会报错。
    
      3. 构造函数的prototype属性，在ES6的‘类’上面继续存在。而且类的所有方法都定义在类的prototype属性上面。
      换句话说就是打印Miaov的prototype属性就可以看到类中的所有方法。
      疑问：
        1.prototype是什么？有什么用？
        2.面向对象中的原型和原型链到底是怎么回事？
        3.面向对象中的类是什么意思？
        4.ES5和ES6实现面向对象的语法差异是什么？
        5.到底什么是闭包？闭包和沙箱函数的区别是什么？
        6.高阶函数又是什么？
      
      为了解决上面疑惑，现在开始我要快速复习一下JS的面向对象知识。复习一遍之后再回头来看这些问题。


      4. 定义在类中的方式都是不可以枚举的。

      5. constructor 方法是类的默认方法，通过new命令生成对象实例的时候，自动调用该方法。一个类必须有constructor方法，如果没有手动定义，JS也会自动添加constructor方法。
      也就是你如果不传参的情况下，写不写constructor都可以。

      6. 生成类的实例对象的写法，与ES5完全一样，也是使用new吗，命令。如果忘记加上new，想函数那样调用Class就会报错。
     */

    console.log(Miaov.prototype)

    console.log(Object.keys(Miaov.prototype)) // []


    class P {};
    const p = new P();
    console.log("实例p: ", p);


    p(); // 报错 p is not a function
  </script>
```
