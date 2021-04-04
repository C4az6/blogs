# 一篇文章快速掌握Vuex



## 1.Vuex是什么？

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension (opens new window)](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

详细资料参考：<https://vuex.vuejs.org/zh/>



## 2.Vuex基础使用

1. 在项目根目录创建`store`文件夹，文件夹中创建`index.js`文件，编写如下代码。

   ```js
   import Vue from 'vue'
   import Vuex from 'vuex'
   
   Vue.use(Vuex)
   
   export default new Vuex.Store({
   	// 管理的全局变量(状态)
   	state: {
   		
   	},
   	// 类似组件中的计算属性
   	getters: {
   		
   	},
   	// 同步方法
   	mutations: {
   		
   	},
   	// 异步方法
   	actions: {
   		
   	}
   })
   ```

2. 在`main.js`中添加如下配置

   ```js
   import Vue from 'vue'
   import App from './App'
   import store from './store'
   
   Vue.config.productionTip = false
   
   App.mpType = 'app'
   
   const app = new Vue({
       store,
       ...App
   })
   app.$mount()
   ```

   > 重点是第3行和第10行。

3. state的应用场景

   举个例子，看下面的几张图。

   ![1617455676127](https://img2020.cnblogs.com/blog/2217722/202104/2217722-20210404122108969-1478463168.png)

   

   ![1617455718239](https://img2020.cnblogs.com/blog/2217722/202104/2217722-20210404122109366-332115429.png)

   比如我们在商品详情页面中要对商品进行添加到购物车的操作。

   思考：如果没有Vuex的时候我们要怎么操作？

   > 我们一般会将这些要添加到购物车的数据先存储到`localStorage`本地存储中，
   >
   > 等到达购物车页面的时候再从`localStorage`本地存储中读取数据渲染到列表中。

   Vuex出现后，我们就有了更高效的实现方式。

   > 将商品添加到购物车的时候直接将商品数据存储到Vuex的state中，然后在购物车页面的时候直接从Vuex里面获取数据，注意：Vuex中的state数据是响应式的。 如果你在别的组件要使用购物车里面的数据也是可以直接通过Vuex获取的，如果使用`localStorage`的话你得写2遍，这样就比较繁琐了。

## 3.Vuex的state多种用法

Vuex中的状态数据

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 管理的全局变量(状态)
    state: {
        list: [
            {
                id: 1,
                name: '笔记本电脑',
                status: true
            },
            {
                id: 2,
                name: '手机',
                status: false
            },
            {
                id: 3,
                name: '机械键盘',
                status: true
            }
        ]
    },
    // 类似组件中的计算属性
    getters: {

    },
    // 同步方法
    mutations: {

    },
    // 异步方法
    actions: {

    }
})
```



方式1：直接获取方式

```js
console.log(this.$store.state.list)
```

方式2：`mapState`结合`computed`方式获取

```js
computed:mapState({
    list:state=>state.list		// 支持自定义名称
}),
onLoad() {
  //通过mapState映射到本地后获取
  console.log(this.list)
},
```

方式3：基于方式2的简写方式

```js
computed:mapState({
    list2: "list"
}),
onLoad() {
  //通过mapState映射到本地后获取
  console.log(this.list2)
},
```

> 最后输出的还是Vuex中的状态list

方式4：对Vuex中的State状态做处理后再映射本地

```js
computed:mapState({
    newList(state) {
        return state.list.filter(v => v.status)
    }
}),
onLoad() {
  //通过mapState映射到本地后获取
  console.log(this.newList)
}
```

> 输出：[Object] [{"id":1,"name":"笔记本电脑","status":true},{"id":3,"name":"机械键盘","status":true}]

方式5：前面的`mapState`写法的一个缺点是占用了计算属性，如果你有其他的计算属性需求，那就无法实现了，因此实际开发中建议使用下面方式。

使用拓展运算符拓展mapState函数

```js
computed: {
    ...mapState(['list'])		// 直接拿list，该写法无法自定义名称或对Vuex状态数据做处理
}
```

当然，如果你又不想占用计算属性，并且还想自定义Vuex的状态名称或者对状态做处理，那就使用下面语法

```js
computed:{
    ...mapState({
        newList(state) {
            return state.list.filter(v => v.status)
        }
    })
},
onLoad() {
	console.log(this.newList)
},
```



## 4.Vuex的Getters多种用法

`Getters`类似计算属性，但是有些地方又和计算属性有点不一样。

举个例子：

Vuex state有下列商品数据：

```js
export default new Vuex.Store({
    // 管理的全局变量(状态)
    state: {
        list: [
            {
                id: 1,
                name: '笔记本电脑',
                status: true
            },
            {
                id: 2,
                name: '手机',
                status: false
            },
            {
                id: 3,
                name: '机械键盘',
                status: true
            }
        ]
    },
    // 类似组件中的计算属性
    getters: {

    },
    // 同步方法
    mutations: {

    },
    // 异步方法
    actions: {

    }
})
```

现在我们需要获取list列表中的status为false的数据，怎么搞？

在上面我们已经用到了下面的方式进行过滤处理。

```js
computed:mapState({
    newList(state) {
        return state.list.filter(v => v.status)
    }
})
```

但是，你要知道，如果有10个组件要用到这样的数据，你是不是得写10次这样的过滤代码，这样搞是非常不合理的，代码会很冗余，因此我们需要使用`Getters`来进行处理。

> 建议在Vuex中对state数据进行处理的逻辑都写在Getters中。

Getters代码

```js
getters: {
    // 计算status状态为false的数据
    noActiveList: state => {
        return state.list.filter(v => !v.status)
    },

        // 计算status状态为true的数据
        activeList: state => {
            return state.list.filter(v => v.status)
        }
}
```

组件中调用`Getters`的几种方式。

方式1：

```js
onLoad() {
    console.log(this.$store.getters.noActiveList)
}
```

方式2：映射数组

```js
computed:{
    ...mapGetters(['activeList', 'noActiveList'])
}
```

方式3：映射对象并且自定义属性名

```js
...mapGetters({
    active: 'activeList',
    noActive: 'noActiveList'
})
```



再换个需求，我们要对`activeList`的数据进行二次过滤，将数据的num属性大于5的商品过滤出来。

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 管理的全局变量(状态)
	state: {
		list: [
			{
				id: 1,
				name: '笔记本电脑',
				status: true,
				num: 1
			},
			{
				id: 2,
				name: '手机',
				status: false,
				num: 10
			},
			{
				id: 3,
				name: '机械键盘',
				status: true,
				num: 8
			},
			{
				id: 4,
				name: '雷蛇鼠标',
				status: false,
				num: 10
			},
			{
				id: 5,
				name: '雷蛇耳机',
				status: true,
				num: 7
			},
			{
				id: 6,
				name: '雷蛇音响',
				status: false,
				num: 4
			}
		]
	},
	// 类似组件中的计算属性
	getters: {
		// 计算status状态为false的数据
		noActiveList: state => {
			return state.list.filter(v => !v.status)
		},
		
		// 计算status状态为true的数据
		activeList: state => {
			return state.list.filter(v => v.status)
		},
		
		// 对activeList进行二次过滤
		getList: (state, getters) => {
			return getters.activeList.filter(v => v.num > 5)
		}
	},
	// 同步方法
	mutations: {
		
	},
	// 异步方法
	actions: {
		
	}
})
```

组件中映射`getList`计算属性后直接使用即可。

```js
computed:{
    ...mapGetters({
        active: 'activeList',
        noActive: 'noActiveList',
        getList: 'getList'
    })
}
```

在加一个需求，我们要通过id获取Vuex state的商品数据。

在Vuex文件中添加`Getters`函数

```js
// 获取指定商品ID的数据
getById: (state) => (id) => {
    return state.list.filter(v => v.id === id)
}
```

在组件中使用

```js
 computed:{
     ...mapGetters({
         getById: 'getById'
     })
 },
     
 onLoad() {
     console.log(this.getById(4))
 }
```



## 5.Vuex中的Mutation多种用法

> mutations里面的方法可以看成是组件中的methods中的方法

定义`mutations`同步方法

```js
// 同步方法
mutations: {
    increment(state, n) {
        state.number++;
        console.log(state.number, n)
    }
}
```

在组件中调用`mutations`方法的2种方式：

1. 通过`this.$store.commit`方式调用

   ```js
   this.$store.commit('increment', 12)
   ```

2. 通过映射方法的方式调用

   ```js
   import {mapMutations} from 'vuex'
   methods: {
       ...mapMutations(['increment'])
   },
   onLoad() {
       this.increment(100)
   }
   ```

   如果需要自定义映射到methods的方法名称，需要改写成下面的形式。

   ```js
   methods: {
       ...mapMutations({
           Inc: 'increment'
       })
   },
   onLoad() {
       this.Inc(100)
   }
   ```



## 6.Vuex的Action用法

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

看一个简单的例子：

```js
// 同步方法
mutations: {
    increment(state, n) {
        state.number++;
        console.log(state.number, n)
    }
},
    // 异步方法
    actions: {
        asyncInc(context, n) {
            console.log(n)
            setInterval(()=>{
                context.commit('increment', n)
                console.log(context.state.number)
            }, 2000)
        }
    }
```

> 这里的actions中的`asyncInc`函数是一个异步函数，用来提交mutations来修改state中的number数据。

在组件中进行调用actions。

方式1：直接调用

```js
this.$store.dispatch('asyncInc', 666)
```

方式2：通过`mapActions`辅助函数调用

```js
methods: {
    ...mapActions(['asyncInc'])
},
onLoad() {
	this.asyncInc(777)
}
```

actions的定义还支持简写方式：

```js
// 异步方法
actions: {
    asyncInc({commit, state}, n) {
        console.log(n)
        setInterval(()=>{
            commit('increment', n)
            console.log(state.number)
        }, 2000)
    }
}
```

> 通过使用解构赋值的语法直接将commit和state从context对象上解构出来然后直接使用即可。



## 7.Vuex的模块化

如果项目越做越大，模块越来越多，所有的状态和方法都写在同一个`index.js`文件中，那么维护起来会非常麻烦，如果此时按照不同模块划分不同的状态和方法就会好很多。

举个例子，有一个电商项目，我们需要将购物车模块的Vuex状态单独划分出来，怎么做呢？

首先在`store`文件夹中创建一个用户模块化的文件夹`modules`，然后在`modules`文件夹中创建各个模块，例如`cart.js`购物车模块。

`cart.js`

```js
/* 购物车模块的Vuex状态 */

export default {
    // 管理的全局变量(状态)
    state: {
        number: 1,
        list: [
            {
                id: 1,
                name: '笔记本电脑',
                status: true,
                num: 1
            },
            {
                id: 2,
                name: '手机',
                status: false,
                num: 10
            },
            {
                id: 3,
                name: '机械键盘',
                status: true,
                num: 8
            },
            {
                id: 4,
                name: '雷蛇鼠标',
                status: false,
                num: 10
            },
            {
                id: 5,
                name: '雷蛇耳机',
                status: true,
                num: 7
            },
            {
                id: 6,
                name: '雷蛇音响',
                status: false,
                num: 4
            }
        ]
    },
    // 类似组件中的计算属性
    getters: {
        // 计算status状态为false的数据
        noActiveList: state => {
            return state.list.filter(v => !v.status)
        },

        // 计算status状态为true的数据
        activeList: state => {
            return state.list.filter(v => v.status)
        },

        // 对activeList进行二次过滤
        getList: (state, getters) => {
            return getters.activeList.filter(v => v.num > 5)
        },

        // 获取指定商品ID的数据
        getById: (state) => (id) => {
            return state.list.filter(v => v.id === id)
        }
    },
    // 同步方法
    mutations: {
        increment(state, n) {
            state.number++;
            console.log(state.number, n)
        }
    },
    // 异步方法
    actions: {
        asyncInc({commit, state}, n) {
            console.log(n)
            setInterval(()=>{
                commit('increment', n)
                console.log(state.number)
            }, 2000)
        }
    }
}

```

`index.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart
    }
})
```

在组件中获取state。

```js
onLoad() {
    // 此时获取state就需要在state后面加上模块名称
    console.log(this.$store.state.cart.list)
}
```

通过`mapState`辅助函数方式获取。

```js
computed:{
    ...mapState({
        list: state=>state.cart.list,		// 需要添加cart模块名称
        newList(state) {		// 对state数据进行包装处理
            return state.cart.list.filter(v=>v.status)
        }
    }，
onLoad() {
    console.log(this.list)
    console.log(this.newList)
}
```

> 获取state需要添加模块名称，而且不能直接使用...mapState([])这种数组的写法映射state，要使用对象的写法



模块化中使用`getters`

在组件中调用（各个模块的Getters没有重名的情况下）

```js
console.log(this.$store.getters.getById(1))
```

如果出现不同模块Getters重名情况则会报错。

![1617507277128](https://img2020.cnblogs.com/blog/2217722/202104/2217722-20210404122109576-65255641.png)

> 因此在引入多个模块的情况下请务必保证`Getters`不要重名。

通过`mapGetters`辅助函数使用getters

```js
computed:{
    ...mapGetters(['getById2'])
},
onLoad() {
   console.log(this.getById2(1))
}
```



再来看看`mutations`和`actions`在模块化中的调用方式。

```js
this.$store.commit('increment', 666)
```

输出结果：

![1617508226900](https://img2020.cnblogs.com/blog/2217722/202104/2217722-20210404122109746-559067416.png)

可以发现在模块化中`mutations`的方法即使同名也不会报错，而是会根据`index.js`中注册的模块顺序依次执行。

通过`mapMutations`辅助函数使用`mutations`

```js
methods: {
    ...mapMutations(['increment'])
},
onLoad() {
	this.increment(666)
},
```



再来看看`actions`在模块化中的表现。

```js
console.log(this.$store.dispatch('asyncInc', 111))
```

通过`mapActions`辅助函数使用`actions`

```js
methods: {
    ...mapActions(['asyncInc'])
},
onLoad() {
	this.asyncInc(666)
}
```

总结一下：

> 除了调用state的数据需要添加模块名称，其他的getters、mutations、actions的调用和没有分模块是没有什么区别的，另外注意：不同模块的getters最好不要重名。
>
> 不同模块mutations、actions方法重名会混合调用，例如调用a模块中的mutations的b方法，再调用b模块中的mutations的b方法。

