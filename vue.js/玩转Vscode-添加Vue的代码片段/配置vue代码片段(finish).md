在vscode中使用 ctrl+shift+p 打开一个选项窗口，然后找到配置用户代码片段，点击进去，输入vue.json找到对应的配置文件点击进去，然后粘贴下面配置替换即可。

![clipboard](https://img2020.cnblogs.com/blog/2217722/202101/2217722-20210114070719206-1064216065.png)

![clipboard-1610579151127](https://img2020.cnblogs.com/blog/2217722/202101/2217722-20210114070719417-2062866199.png)

```json
{
  // Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  // Example:
  "Print to console": {   // 描述信息
    "prefix": "log",    // 前缀，在文件中输入这个关键词就能生成body里面的代码段了
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "Log output to console"    // 代码段详细的描述信息
  },
  "Print to Vue.js template": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div class=\"$1\">$2</div>",   // \是为了转义双引号，光标默认停留在$1的位置，然后输出tab键进入$2位置，依次类推，找不到$之后就直接跳到行尾
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: '',",
      "  components: {},",
      "  props: {},",
      "  data () {",
      "    return {}",
      "  },",
      "  computed: {},",
      "  watch: {},",
      "  created () {},",
      "  mounted () {},",
      "  methods: {}",
      "}",
      "</script>",
      "",
      "<style scoped lang=\"less\"></style>",
      ""
    ],
    "description": "generator vue template"
  }
}
```

这个时候你在.vue的文件中输入vue就会生成出下面的代码模版。

```javascript
<template>
  <div class=""></div>
</template>

<script>
export default {
  name: '',
  components: {},
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

**具体定制代码段的方法如下。**

进入<https://snippet-generator.app/>这个网站，然后将你要生成代码块的代码片段丢到左侧位置，右侧会自动生成出对应的vscode的代码段，当然你也可以点击右侧上面的tab栏切换不同编辑器下的代码块，这里以vscode为例，将右侧的代码块复制粘贴到vue.json配置文件中，配置对应的代码前缀名称即可。

![clipboard-1610579195288](https://img2020.cnblogs.com/blog/2217722/202101/2217722-20210114070719574-2074808948.png)