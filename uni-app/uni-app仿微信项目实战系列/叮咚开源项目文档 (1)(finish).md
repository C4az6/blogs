## 叮咚项目参考文档 v1.0

此项目是一款高仿`微信`APP的即时通讯应用，叫`叮咚`，是我的开源处女座，希望能与感兴趣的你交流 : )

项目技术栈：

​前端部分：uni-app + nvue 实现原生页面渲染、同时兼容多端。

后端接口：Egg.js + MySQL + Redis 实现后端API接口服务。

不使用第三方组件库，自己写一套。

为什么做这个项目？

1. 在公司用`uni-app`写的都是比较简单的小程序项目，没有真正意义上从0到1实现过一个功能较复杂的`跨端`项目，借此机会，深入实践`uni-app`技术栈
2. 我非常渴望拥有从0到1独立开发一款全栈应用的能力，因为我觉得`Node.js`太美了，太性感，对前端太友好了，不学习它简直就是对不起`前端工程师`这个 Title，借此机会彻底实践一次。

我想这是一个美好的开始，我也把它当作一种精进技术的方式，希望能在`issues`或企鹅中与你进行思想碰撞。

我的企鹅：`1762458611`



## NVUE需要注意的点

1. 在NVUE中引入字体图标需要参考Weex的引入规则 [点我查看](<https://weex.apache.org/zh/docs/modules/dom.html#addrule>)

2. NVUE模式下的页面默认是Flex布局
3. iconfont图标应该放在`text`标签中包裹，不能直接使用`view`标签包裹
4. NVUE中的屏幕都是以750像素为基准
5. text组件换行问题，text组件中的内容如果有换行，显示的效果也会换行
6. Weex是从上到下进行渲染的，如果你的元素有定位之类的脱离文档流的需求，元素最好按顺序写，否则`z-index`可能也救不了你。
7. 目前仅 iOS 支持 `box-shadow` 属性，Android 暂不支持，可以使用图片代替。每个元素只支持设置一个阴影效果，不支持多个阴影同时作用于一个元素。



`uni-app`中 vue 和 nvue 的区别：

uni-app是逻辑和渲染分离的。渲染层，在app端提供了两套排版引擎：小程序方式的webview渲染，和weex方式的原生渲染。
两种渲染引擎可以自己根据需要选。vue文件走的webview渲染，nvue走的原生渲染。
组件和js写法是一样的，css不一样，原生排版的能用的css必须是flex布局，这是web的css的子集。当然什么界面都可以用flex布出来。不懂flex布局就自己学。

一般情况下用vue就可以了。如果是app且有部分场景vue页面的性能不满足你的需求时，这个页面可以改用nvue页面。如果app里同时存在同名的vue和nvue页面，在app端会优先执行nvue页面，而其他端仍然优先vue页面。

区别和适用场景这文档里写的很清楚：<https://uniapp.dcloud.io/nvue-outline>



## 记录一些踩过的坑

1. [【报Bug】2.2.5版本纯nvue的uniapp模式子组件使用插槽报错问题](https://ask.dcloud.net.cn/question/78535)

## 1.环境搭建和项目创建

需要安装的插件：

1. 内置浏览器
2. App真机运行
3. uni-app App调试
4. less编译
5. scss/sass编译
6. stylus编译
7. es6编译



创建项目：

项目类型为：uni-app，使用默认模版。



开启原生渲染：

uni-app在App端，支持vue页面和nvue页面混搭、互相跳转。也支持纯nvue原生渲染。

启用纯原生渲染模式，可以减少App端的包体积、减少使用时的内存占用。因为webview渲染模式的相关模块将被移除。

在manifest.json源码视图的`"app-plus"`下配置`"renderer":"native"`，即代表App端启用纯原生渲染模式。此时pages.json注册的vue页面将被忽略，vue组件也将被原生渲染引擎来渲染。

如果不指定该值，默认是不启动纯原生渲染的。

```json
 // manifest.json    
    {    
         // ...    
        /* App平台特有配置 */    
        "app-plus": {    
            "renderer": "native", //App端纯原生渲染模式
        }    
    }
```

使用uni-app编译模式：

```json
 // manifest.json    
    {    
         // ...    
        /* App平台特有配置 */    
        "app-plus": {    
            "renderer": "native", //App端纯原生渲染模式
            "nvueCompiler" : "uni-app",
        }    
    }
```



## 2.全局配置

### 2.1 引入全局样式

将封装好的`free.css`库引入到项目中。



### 2.2 引入自定义图标库

全局加载自己的字体图标库并且做多端适配：

```html
<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-NVUE
			// 加载公共图标库 只有在NVUE环境下才加载
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				src: "url('https://at.alicdn.com/t/font_1365296_2ijcbdrmsg.ttf')"
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/free.css");
	@import url("./common/common.css");
	/* #ifndef APP-PLUS */
	@import url("./common/free-icon.css");
	/* #endif */
</style>

```

> 如果对跨端兼容和条件编译语法不熟悉，可以参考[官方文档](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)





### 2.3 配置tabbar底部导航

修改`package.json`配置文件、添加`tabbar`配置。

这里的 tabbar 的 icon 图标大小为 81*81。

```json
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/tabbar/index/index",
			"style": {}
		},
		{
			"path": "pages/tabbar/mail/mail",
			"style": {}
		},
		{
			"path": "pages/tabbar/find/find",
			"style": {}
		},
		{
			"path": "pages/tabbar/my/my",
			"style": {}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "叮咚",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"tabBar": {
		"color": "#000000",
		"selectedColor": "#08C261",
		"borderStyle": "black",
		"backgroundColor": "#F7F7F7",
		"list": [{
				"iconPath": "static/tabbar/index.png",
				"selectedIconPath": "static/tabbar/index-select.png",
				"pagePath": "pages/tabbar/index/index",
				"text": "首页"
			},
			{
				"iconPath": "static/tabbar/mail.png",
				"selectedIconPath": "static/tabbar/mail-select.png",
				"pagePath": "pages/tabbar/mail/mail",
				"text": "通讯录"
			},
			{
				"iconPath": "static/tabbar/find.png",
				"selectedIconPath": "static/tabbar/find-select.png",
				"pagePath": "pages/tabbar/find/find",
				"text": "发现"
			},
			{
				"iconPath": "static/tabbar/my.png",
				"selectedIconPath": "static/tabbar/my-select.png",
				"pagePath": "pages/tabbar/my/my",
				"text": "我的"
			}
		]
	}
}

```

配置细节参考[官方文档](https://uniapp.dcloud.io/collocation/pages)



### 2.4 配置globalStyle

取消APP端下的原生导航栏、滚动条。

```json
"globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "叮咚",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8",
    "app-plus":{
        "titleNView":false,
        "scrollIndicator":"none"
    }
}
```



## 3.聊天列表页开发

### 3.1 头部导航栏组件开发

```html
<template>
	<view>
		<!-- 导航栏 -->
		<view class="bg-light">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between border" style="height: 90rpx">
				<!-- 左边标题部分 -->
				<view class="flex align-center">
					<text class="font-md ml-3">叮咚(10)</text>
				</view>
				<!-- 右边图标部分 -->
				<view class="flex align-center">
					<view class="flex align-center justify-center border" style="height: 90rpx;width: 90rpx;">
						<text class="iconfont font-md">&#xe6e3;</text>
					</view>

					<view class="flex align-center justify-center border" style="height: 90rpx;width: 90rpx;">
						<text class="iconfont font-md">&#xe682;</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0 // 状态栏高度
			}
		},
		onLoad() {
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
		},
		methods: {

		}
	}
</script>

<style lang="less">
</style>

```



### 3.2 [*]图标按钮组件封装

这个地方有一个坑：

> NVUE 中如果使用 iconfont 的话就必须使用`text`标签进行包裹，如果要封装成组件，通过`slot`动态传递iconfont 的 16 进制值的话就会报错，因为 slot 会转换成`text`标签，又因为`text`标签里面不能再次嵌套`text`标签，所以报错，这个也是近期才发现的，以前看别人写没有问题，怎么解决呢？通过 props 传参。

`封装的组件: free-icon-button.vue`

```html
<template>
<view
      class="flex align-center justify-center" 
      hover-class="bg-hover-light" @click="$emit('click')"
      style="height: 90rpx;width: 90rpx;">
    <text class="iconfont font-md">{{iconValue}}</text>
    </view>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            iconValue: {
                required: true
            }
        },
        data () {
            return {}
        },
        computed: {},
        watch: {},
        created () {
            console.log(this.iconValue)
        },
        mounted () {},
        methods: {}
    }
</script>

<style scoped lang="less"></style>

```



`调用组件的文件  index/index.nvue`

```html
<free-icon-button @click="handleIconButtonClick" :iconValue="'\ue682'"/>
```



> 这里面还有一个细节：
>
> 通过props方式传参的话 iconfont 的 16 进制值就不能写成 `&#xe682;`，必须写成`\ue682`

这个问题通过查资料 + 反复实践大约耗时 30 分钟，因此记录一下这个坑。



### 3.3 封转头部导航组件

> uni-app的普通组件中使用onLoad、onShow不生效？，要用created、mounted，为什么？

这个就要从`uni-app`的生命周期说起了。。。

`uni-app`有 3 类生命周期：

1. 应用生命周期
2. 页面生命周期
3. 组件生命周期

应用生命周期：

![1615810364593](https://img2020.cnblogs.com/blog/2217722/202105/2217722-20210528014051422-1595480633.png)

> 重点是应用生命周期只能在`App.vue`中监听，其他页面监听无效，所以不要用错了。



页面生命周期： 

![1615810725398](https://img2020.cnblogs.com/blog/2217722/202105/2217722-20210528014051753-1408851910.png)

> 需要注意的是：`onLoad`和`onReady`只会触发一次，这是官方没有说的，所以还是要多实践！

以上是常用的几个，想了解全部的参考[官方文档](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)



组件生命周期：

`uni-app` 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：

![1615811129046](https://img2020.cnblogs.com/blog/2217722/202105/2217722-20210528014052016-2008590515.png)

> 以后编写组件的时候就要细心点，页面组件就用页面的生命周期，普通组件就用组件的生命周期，别乱搞给自己挖坑。



`index/index.nvue 页面代码`

```html
<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title titleValue="叮咚(99+)" fixed />

		<!-- 列表 -->
		<view style="height: 2000rpx;">
			<text>好好学习，天天向上！</text>
		</view>
	</view>
</template>

<script>
	import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
	export default {
		name: "IndexPage",
		components: {
			FreeNavBar
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="less">
</style>

```



`free-nav-bar.vue 组件代码`

```html
<template>
	<view>
		<!-- 导航栏 -->
		<view class="bg-light" :class="fixed?'fixed-top':''">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between border" style="height: 90rpx">
				<!-- 左边标题部分 -->
				<view class="flex align-center">
					<text v-if="title" class="font-md ml-3">{{titleValue}}</text>
				</view>
				<!-- 右边图标部分 -->
				<view class="flex align-center">
					<free-icon-button :iconValue="'\ue6e3'" />
					<free-icon-button :iconValue="'\ue682'"/>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle"></view>
	</view>
</template>

<script>
import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
export default {
  name: 'FreeNavBar',
  components: {
		FreeIconButton,
	},
  props: {
		// 是否显示标题
		title: {
			type: Boolean,
			default: false
		},
		// 标题内容
		titleValue: {
			type: String
		},
		// 是否固定导航栏
		fixed: {
			type: Boolean,
			default: true
		}
	},
  data () {
    return {
			navBarHeight: 0,		// 状态栏高度+导航栏高度
			statusBarHeight: 0 // 状态栏高度
		}
  },

  computed: {
		fixedStyle() {
			return `height: ${this.navBarHeight}px`
		}
	},
  watch: {},
  created () {},
  mounted () {
		console.log("API获取：", uni.getSystemInfoSync().statusBarHeight)
		// NVUE环境下获取系统状态栏的高度
		// #ifdef APP-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
		// #endif
		/* 
			这里使用uni.upx2px的原因是因为我们获取的statusBarHeight是px单位，要进行相加
			需要转换成相同的单位才行.
		 */
		this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
	},
  methods: {},
}
</script>

<style scoped lang="less">
</style>

```

> 这里使用计算属性配合动态计算 状态栏 + 导航栏的高度，这个高度给占位的`view`标签用，防止列表被导航栏覆盖。



### 3.4 开发聊天列表组件

`index/index.nvue 文件代码`

```html
<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title titleValue="叮咚(99+)" fixed />

		<!-- 列表 -->
		<view class="flex align-center" v-for="(item, index) in list" :key="index">
			<!-- 左侧 -->
			<view class="flex align-center justify-center" style="width: 145rpx;">
				<image :src="item.avatar" style="width: 92rpx;height:92rpx;" mode="widthFix" class="rounded"></image>
			</view>
			<!-- 右侧 -->
			<view class="flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary">
				<view class="flex align-center justify-between mb-1">
					<text class="font-md">{{item.nickname}}</text>
					<text class="font-sm text-light-muted">{{item.update_time | formatTime}}</text>
				</view>
				<text class="font text-ellipsis text-light-muted">{{item.data}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import $Time from '@/common/free-lib/time.js'
	export default {
		name: "IndexPage",
		components: {
			FreeNavBar
		},
		data() {
			return {
				list: [{
						avatar: "/static/avatar.jpg",
						nickname: '老婆',
						update_time: Date.now(),
						data: '今晚想吃什么都可以...'
					},
					{
						avatar: "/static/avatar.jpg",
						nickname: '老婆2',
						update_time: Date.now(),
						data: '今晚想吃什么都可以...'
					},
					{
						avatar: "/static/avatar.jpg",
						nickname: '老婆3',
						update_time: Date.now(),
						data: '今晚想吃什么都可以...'
					},
					{
						avatar: "/static/avatar.jpg",
						nickname: '老婆4',
						update_time: Date.now(),
						data: '今晚想吃什么都可以...'
					},
					{
						avatar: "/static/avatar.jpg",
						nickname: '老婆5',
						update_time: Date.now(),
						data: '今晚想吃什么都可以...'
					}
				]
			}
		},
		methods: {},
		filters: {
			formatTime(value) {
				return $Time.gettime(value)
			}
		}
	}
</script>

<style lang="less">
</style>

```



### 3.5 封装头像组件

`free-avatar.vue 文件代码`

```html
<template>
  <image
		:src="src"
		mode="widthFix"
		:style="getStyle"
		:class="type"
	></image>
</template>

<script>
export default {
  name: 'FreeAvatar',
  components: {},
  props: {
		// 图像大小
		size: {
			type: [String, Number],
			default: 90
		},
		// 图像地址
		src: {
			type: String,
			default: ""
		},
		// 图像显示类型，是否圆角显示
		type: {
			type: String,
			default: "rounded"
		}
	},
  data () {
    return {}
  },
  computed: {
		getStyle () {
			return `width: ${this.size}rpx;height: ${this.size}rpx;`
		}
	},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>

```

`index/index.vue 文件中使用`

```html
<free-avatar :src="item.avatar" size="92" />
```



### 3.6 badge组件封装

封装前的代码：

`index/index.nvue 角标元素代码`

```html
<!-- 角标 -->
<text class="bg-danger text-white rounded-circle font-sm badge" >9</text>
```

`角标css代码`

```css
.badge {
    padding-left: 14rpx;
    padding-right: 14rpx;
    padding-bottom: 6rpx;
    padding-top: 6rpx;
    position: absolute;
    right: 15rpx;
    top: 15rpx;
}
```



封装后的代码：

`free-badge.vue`

```html
<template>
  <text 
		class="bg-danger text-white rounded-circle font-sm free-badge"
		:class="badgeClass"
		:style="badgeStyle"
	>{{value}}</text>
</template>

<script>
export default {
  name: 'FreeBadge',
  components: {},
  props: {
		// 角标样式类名
		badgeClass: {
			type: String,
			default: ""
		},
		// 角标行内样式
		badgeStyle: {
			type: String,
			default: ""
		},
		// 角标内容
		value: {
			type: [String, Number],
			default: ""
		}
	},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
	.free-badge {
		padding: 6rpx 14rpx;
	}
</style>

```



使用`badge`

```html
<free-badge value="1" badgeClass="position-absolute" badgeStyle="top: 15rpx;right:15rpx" />
```



### 3.7 封装聊天列表组件

> 需要注意view标签监听`@longpress`长按事件无法获取坐标值，此时换成 div 标签即可。

` free-media-list.vue 文件代码`

```html
<template>
	<view hover-class="bg-hover-light" v-if="item">
		<!-- 列表 -->
		<div class="flex" @click="onClick" @longpress="long">
			<!-- 左侧 -->
			<view class="flex align-center justify-center position-relative" style="width: 145rpx">
				<free-avatar :src="item.avatar" size="92" />
				<!-- 角标 -->
				<free-badge :value="item.noreadnum" badgeClass="position-absolute" badgeStyle="top: 15rpx;right:15rpx" />
			</view>
			<!-- 右侧 -->
			<view class="flex flex-column border-bottom flex-1 py-3 pr-3 border-light-secondary">
				<view class="flex align-center justify-between mb-1">
					<text class="font-md">{{item.nickname}}</text>
					<text class="font-sm text-light-muted">{{item.update_time | formatTime}}</text>
				</view>
				<text class="font-sm text-ellipsis text-light-muted">{{item.data}}</text>
			</view>
		</div>
	</view>
</template>

<script>
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import FreeBadge from '@/components/free-ui/free-badge.vue'
	import $Time from '@/common/free-lib/time.js'
	export default {
		name: 'FreeMediaList',
		components: {
			FreeAvatar,
			FreeBadge
		},
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			onClick() {
				this.$emit('click')
			},
			long(e) {
				console.log(e)
			}
		},
		filters: {
			formatTime(value) {
				return $Time.gettime(value)
			}
		}
	}
</script>

<style scoped lang="less">
</style>

```



使用组件的代码

```html
<!-- 列表 -->
<block v-for="(item, index) in list" :key="index">
    <free-media-list
	:item="item"
    :index="index"
	/>
</block>
```



### 3.8 封装全局mixin

> 例如有以下场景：
>
> 多个组件内需要对日期时间进行格式化处理，这时我们已经在某个组件内定义了`filters`过滤器，其他组件也需要使用这个过滤器，难道我们一个个 CV 过去吗？显然太low，而且以后这个`filters`发生变动你其他引用了这个`filters`的组件代码也得跟着改，也就会造成大量的重复代码冗余，维护起来极其不方便，此时就可以用 Vue 的`mixin`特性来解决这个问题，当然有人会说 `"我用全局过滤器也可以啊"`，是的，但我就要用`mixin`。

官方的解释和`demo`已经很详细了，参考[官方文档](https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80)

`mixin/free-base.js 文件代码`

```js
import $Time from '@/common/free-lib/time.js'
export default {
	filters: {
		formatTime(value) {
			return $Time.gettime(value)
		}
	}
}

```



`使用mixin`

```js
import freeBase from '@/common/mixin/free-base.js'

export default {
    mixins: [freeBase],
    props: {
    },
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
}
```

> 到这里就已经把处理时间的过滤器混入到组件中了，直接在模版中使用即可。



### 3.8 开发弹出层组件

> 通过 API 动态获取的参数都为 px，如果需要与 rpx 单位进行计算，要提前使用 `uni.upx2px`方法将 rpx 转换成px。
>
> ```js
> mounted() {
>     // 获取系统信息
>     let info = uni.getSystemInfoSync()
>     this.maxX = info.windowWidth - uni.upx2px(this.bodyWidth) - 30
>     this.maxY = info.windowHeight - uni.upx2px(this.bodyHeight) - 30
> },
> ```
>
> 



长按事件的跨端兼容问题。

> `@longpress`事件在nuve的原生APP环境和微信小程序环境下获取的参数属性不同，因此需要写2套代码兼容多端。
>
> ```js
> long(e) {
>     let x = 0
>     let y = 0
>     // #ifdef APP-NVUE
>     if(Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
>         x = e.changedTouches[0].screenX
>         y = e.changedTouches[0].screenY
>     }
>     // #endif
> 
>     // #ifdef MP-WEIXIN
>     x = e.target.x
>     y = e.target.y
>     // #endif
> 
>     this.$emit('long', {x,y})
> }
> ```
>
> 



处理长按弹出菜单的边界问题。

> 1. 计算屏幕宽高的边界最大值，通过API获取屏幕宽高 - 元素宽高
> 2. 判断用户点击的x/y坐标是否大于该值，大于直接使用最大值，否则是否坐标值



给弹出层组件增加动画效果，代码结合上下文进行理解。

1. 引入 weex 的 `animation`模块

   ```js
   // #ifdef APP-NVUE
   const animation = weex.requireModule('animation')
   // #endif
   ```

2. 使用 `animation` API 实现动画

   ```js
   show(x = -1, y = -1) {
       this.x = (x > this.maxX) ? this.maxX : x
       this.y = (y > this.maxY) ? this.maxY : y
       this.status = true
       // #ifdef APP-NVUE
       this.$nextTick(_=>{
           animation.transition(this.$refs.popup, {
               styles: {
                   transform: 'scale(1,1)',
                   transformOrigin: 'left top',
                   opacity: 1
               },
               duration: 200,	// 单位：ms
               timingFunction: 'ease'
           })
       })
       // #endif
   },
   ```



### 3.9 开发导航栏的弹出菜单

直接看 commit



### 3.10 删除当前聊天会话

直接看 commit



### 3.11 设置和取消聊天置顶

直接看 commit



## 4.通讯录页开发

### 4.1 通讯录列表组件开发

`mail/mail.nvue`

```html
<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title titleValue="通讯录" fixed @openPopup="handleOpenPopup" />
		<free-media-list />

		<!-- 通讯录列表组件 -->
		<view class="flex bg-white" v-for="item in 5">
			<!-- 左侧图片 -->
			<view class="flex justify-center align-center py-2 px-3" style="width: 132rpx; height: 104rpx;">
				<image style="width: 76rpx; height: 76rpx;" src="/static/images/mail/friend.png" mode="widthFix"></image>
			</view>

			<!-- 右侧内容 -->
			<view class="flex-1 flex align-center border-bottom">
				<text class="font-md text-dark">新的朋友</text>
			</view>
		</view>
	</view>
</template>

<script>
	import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
	export default {
		components: {
			FreeNavBar
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>

```



### 4.2 封装公共列表组件

`free-list-item.vue`

```html
<template>
	<view class="flex bg-white" hover-class="bg-light" @click="$emit('click')">
		<!-- 左侧图片 -->
		<view 
			class="flex justify-center align-center py-2 px-3" 
			style="width: 132rpx; height: 104rpx;"
		>
			<image v-if="cover" style="width: 76rpx; height: 76rpx;" :src="cover" mode="widthFix"></image>
		</view>

		<!-- 右侧内容 -->
		<view class="flex-1 flex align-center border-bottom">
			<text class="font-md text-dark">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FreeListItem',
		components: {},
		props: {
			// 封面
			cover: {
				type: String,
				default: ""
			},
			// 标题
			title: {
				type: String,
				default: ""
			}
		},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {
			console.log(123)
		},
		methods: {}
	}
</script>

<style scoped lang="less"></style>

```



页面组件中使用

```html
<!-- 通讯录列表组件 -->
<free-list-item v-for="(item, index) in list" :key="index" :cover="item.cover" :title="item.title" />
```



### 4.3 完善通讯录列表

效果图：

![1616180499592](https://img2020.cnblogs.com/blog/2217722/202105/2217722-20210528014052289-376831396.png)



`mail/mail.nvue`

```html
<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title titleValue="通讯录" fixed @openPopup="handleOpenPopup" />

		<!-- 通讯录列表组件 -->
		<free-list-item v-for="(item, index) in topList" :key="index" :cover="item.cover" :title="item.title" />
		
		<!-- 通讯录列表 -->
		<block v-for="(item, index) in list" :key="index">
			<view v-if="item.data.length">
				<view class="py-2 px-3 border-bottom bg-light">
					<text class="font-sm text-dark">{{item.letter}}</text>
				</view>
				<free-list-item v-for="(item2, index2) in item.data" :key="index2" :title="item2" cover="/static/avatar.jpg" />
			</view>
		</block>
	</view>
</template>

<script>
	import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import FreeListItem from '@/components/free-ui/free-list-item.vue'
	export default {
		components: {
			FreeNavBar,
			FreeListItem
		},
		data() {
			return {
				topList: [
					{
						title: "新的朋友",
						cover: "/static/images/mail/friend.png",
						event: ""
					},
					{
						title: "群聊",
						cover: "/static/images/mail/group.png",
						event: ""
					},
					{
						title: "标签",
						cover: "/static/images/mail/tag.png",
						event: ""
					}
				],
				list: [{
					"letter": "A",
					"data": [
						"阿苏",
						"阿拉",
						"阿勒",
						"阿里",
						"安庆",
						"澳机"
					]
				}, {
					"letter": "B",
					"data": [
						"保罗",
						"包头",
						"北海福成",
						"北南苑",
						"北都国际"
					]
				}, {
					"letter": "C",
					"data": [
						"长山场",
						"长国",
						"常德",
						"长花~",
						"长王",
						"常机",
						"成双",
						"赤峰"
					]
				}, {
					"letter": "D",
					"data": [
						"大理爱你",
						"大周哈哈",
						"达河",
						"丹浪",
						"德芒",
						"迪香里拉",
					]
				}, {
					"letter": "E",
					"data": [
						"鄂多斯",
					]
				}, {
					"letter": "F",
					"data": [
						"福乐",
					]
				}, {
					"letter": "G",
					"data": [
						"固原六盘",
						"广盘龙",
						"广白机",
						"桂江",
					]
				}, {
					"letter": "H",
					"data": [
						"哈尔滨太平",
						"哈密",
						"海美兰",
						"海拉尔",
						"邯郸",
					]
				}, {
					"letter": "I",
					"data": []
				}, {
					"letter": "J",
					"data": [
						"鸡西兴",
						"佳木斯",
						"嘉峪",
					]
				}, {
					"letter": "K",
					"data": [
						"克拉玛依",
						"库车龟兹",
						"库尔勒",
					]
				}, {
					"letter": "L",
					"data": [
						"拉萨贡嘎",
						"黎平",
						"林芝米",
						"柳州白莲",
					]
				}, {
					"letter": "M",
					"data": [

					]
				}, {
					"letter": "N",
					"data": [

					]
				}, {
					"letter": "O",
					"data": []
				}, {
					"letter": "P",
					"data": [
						"普洱思茅"
					]
				}, {
					"letter": "Q",
					"data": [
						"齐齐哈尔",
						"秦皇岛山",
						"青岛流亭",
						"衢州机场",
						"泉州晋江机场"
					]
				}, {
					"letter": "R",
					"data": [
						"日喀则和"
					]
				}, {
					"letter": "S",
					"data": [
						"三亚凤凰",
						"汕头",
						"上海虹桥",
						"上海浦东",
						"深圳宝安",
						"沈阳桃仙",
						"石家庄正定",
						"苏南硕放"
					]
				}, {
					"letter": "T",
					"data": [
						"塔城",
					]
				}, {
					"letter": "U",
					"data": []
				}, {
					"letter": "V",
					"data": []
				}, {
					"letter": "W",
					"data": [
						"文山",
						"温永强",
						"乌海",
						"武汉天",
					]
				}, {
					"letter": "X",
					"data": []
				}, {
					"letter": "Y",
					"data": []
				}, {
					"letter": "Z",
					"data": [
						"昭通",
						"芷江",
						"中卫",
						"舟山",
					]
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>

```



## 5.发现页开发

`find/find.nvue`

```html
<template>
	<view class="page">
		<free-nav-bar title titleValue="发现" />
		
		<!-- 列表 -->
		<free-list-item title="朋友圈" rightIconShow>
			<text slot="icon" class="iconfont font-lg main-text-color">&#58983;</text>
			<view slot="right" class="position-relative p-1">
				<free-avatar src="/static/avatar.jpg" size="55"/>
				<text 
				  class="rounded-circle bg-danger position-absolute"
				  style="width: 20rpx;height: 20rpx;top: 0;right: 0;"
				></text>
			</view>
		</free-list-item>
		<free-divider />
		
		<free-list-item title="扫一扫" rightIconShow>
			<text slot="icon" class="iconfont font-lg">&#58900;</text>
		</free-list-item>
		
		<free-list-item title="摇一摇" rightIconShow>
			<text slot="icon" class="iconfont font-lg">&#58941;</text>
		</free-list-item>
		<free-divider />
		
		<free-list-item title="看一看" rightIconShow>
			<text slot="icon" class="iconfont font-lg">&#58896;</text>
		</free-list-item>
		
		<free-list-item title="搜一搜" rightIconShow>
			<text slot="icon" class="iconfont font-lg">&#58897;</text>
		</free-list-item>
		<free-divider />
		
		<free-list-item title="购物" rightIconShow>
			<text slot="icon" class="iconfont font-lg">&#58968;</text>
		</free-list-item>
	</view>
</template>

<script>
	import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import FreeListItem from '@/components/free-ui/free-list-item.vue'
	import FreeAvatar from '@/components/free-ui/free-avatar.vue'
	import FreeDivider from '@/components/free-ui/free-divider.vue'
	export default {
		name: "FindIndex",
		components: {
			FreeNavBar,
			FreeListItem,
			FreeDivider,
			FreeAvatar
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="less">

</style>

```

该业务针对`free-list-item`组件做了部分修改，添加了插槽，具体细节参考commit。



## 6.个人中心页开发

### 6.1 优化自定义导航栏功能

`my.nvue`

```html
<template>
  <view class="page">
	<free-nav-bar bgColor="bg-white" >
		<!-- <text slot="right" :iconValue="'\ue59117'"></text> -->
		<free-icon-button slot="right" :iconValue="'\ue6ed'" />
	</free-nav-bar>
	</view>
</template>

<script>
import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
export default {
  name: 'MyIndex',
  components: {
		FreeNavBar,
		FreeIconButton
	},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>

```

> 使用`iconfont`图标的`unicode`编码动态赋值，需要进行格式转换：
>
> 例如将`&#xe601;`转换成`\ue601`，注意这里去掉了分号！



### 6.2 完善个人中心页

效果图：

![1616275944396](https://img2020.cnblogs.com/blog/2217722/202105/2217722-20210528014052547-1475704036.png)



`my.nvue`

```html
<template>
  <view class="page">
		<free-nav-bar bgColor="bg-white" >
			<free-icon-button slot="right" :iconValue="'\ue6ed'" />
		</free-nav-bar>
		
		<free-list-item cover="/static/images/demo/demo6.jpg" coverSize="120" title="张波" rightIconShow>
			<!-- 中间文本内容 -->
			<view class="flex flex-column">
				<text class="text-dark font-lg font-weight-bold">伤心的瘦子</text>
				<text class="text-light-muted font mt-2">叮咚号: Alexander3714</text>
			</view>
			
			<!-- 右侧图标 -->
			<view slot="right">
				<text class="iconfont font-md text-light-muted">&#xe614;</text>
			</view>
		</free-list-item>
		
		<free-divider></free-divider>
		<free-list-item title="支付" rightIconShow>
			<text slot="icon" class="iconfont font-lg py-1">&#xe66c;</text>
		</free-list-item>
		<free-divider></free-divider>
		<free-list-item title="收藏" rightIconShow>
			<text slot="icon" class="iconfont font-lg py-1">&#xea2d;</text>
		</free-list-item>
		<free-list-item title="相册" rightIconShow>
			<text slot="icon" class="iconfont font-lg py-1">&#xe608;</text>
		</free-list-item>
		<free-list-item title="表情" rightIconShow>
			<text slot="icon" class="iconfont font-lg py-1">&#xe605;</text>
		</free-list-item>
		<free-divider></free-divider>
		<free-list-item title="设置" rightIconShow>
			<text slot="icon" class="iconfont font-lg py-1">&#xe612;</text>
		</free-list-item>
	</view>
</template>

<script>
import FreeNavBar from '@/components/free-ui/free-nav-bar.vue'
import FreeIconButton from '@/components/free-ui/free-icon-button.vue'
import FreeListItem from '@/components/free-ui/free-list-item.vue'
import FreeDivider from '@/components/free-ui/free-divider.vue'
export default {
  name: 'MyIndex',
  components: {
		FreeNavBar,
		FreeIconButton,
		FreeListItem,
		FreeDivider
	},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>

```



Typora太卡了。。。换一个文件写。。。