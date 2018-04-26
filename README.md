# koa-vue
> 简单的koa2 + vue 从零开始 with vue-cli

## 1. Create project with `vue-cli`
``` bash
# commit b8bcf6708dd23a69b935eec5e2db66e9b89d382a

npm install -g vue-cli

vue init webpack koa-vue

npm install

npm run dev
```

## 2. Init server end with `koa2`
``` bash
# commit 487661c869eadff3351ac4e5d1633e71fd3c2207

npm install --save busboy koa-router@7 koa-static koa-bodyparser@3
```

## 3. Install `mockjs`、`less`, Update ESLint
### less
``` bash
# 用vue-cli建立的项目 less 即装即用
npm install --save-dev less less-loader
```
Reference: [vue-cli构建项目使用 less](https://www.cnblogs.com/zhuzhenwei918/p/6870340.html?utm_source=itdadao&utm_medium=referral)

### mockjs 和 axios
``` bash
# mockjs 在后面会详细的配置
npm install --save--dev mockjs

npm install --save axios
```

### eslint
本人使用的编辑器为vscode，安装对应的编辑器插件(`ESLint`，`Vetur`)。vue-cli建立项目根目录会自带`.eslintrc.js`文件。此项目用的lint为standard

**如果编辑器仍不实时报错的话，可以试试以下操作**
``` bash
# 全局安装eslint
npm i eslint -g

# 能够校验html 和 .vue 文件
npm i eslint-plugin-html -g
```

**并在vscode设置中增加个性设置(settings.json)**

``` json
{
    ...

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
        "html",
        "vue"
    ],
    "eslint.autoFixOnSave": true
}
```
以上设置能保证vscode识别`js`，`html`，`vue`文件，并进行CodeLint。如果不需要保存自动修复一些语法错误可以关闭 `eslint.autoFixOnSave`

## 4. Mock数据
> `mockjs` 在上一次3中commit中已经安装过
Mock数据的两种解决方案：
```
.
├── src
│   ├── mock
│   │   ├── index.js      // 方法0：配置webpack.dev.conf.js，在webpack钩子before来引入`./mock/index.js`
│   │   ├── mock.js       // 方法1：在前端入口main.js文件中引入`./mock/request`
│   │   └── request.js    // 方法1的接口实现
```
### 方法0
**src/main.js**
``` diff
+ require('./mock/request')
```
**build/webpack.dev.conf.js**
```diff
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
-   before: require('../src/mock/index'), // 引入mock/request.js
+   // before: require('../src/mock/index'), // 引入mock/request.js
    watchOptions: {
      poll: config.dev.poll,
    }
```
**src/mock/request.js**
``` javascript
  match('userInfo', 'post', 'success', {
    name: 'MrSosann',
    date: new Date().toLocaleDateString(),
    email: Random.email()
  })
```
1. 缺点:
    1. 所有http请求都不再走网络，直接由mockjs拦截下来
    2. 无法抓包（无http请求），浏览器network中看不到请求
    3. 即会和前端代码一起打包到bunlde.js中发布到product环境
2. 优点:
    1. 直接配置在前端，跟vue-cli一起打包
    2. 能够使用vue-cle配置好的热更新，可以实时更改mock数据
    3. 发布product环境之后仍走mock数据的bug已经解决（**src/mock/request.js**）

### 方法1
**src/main.js**
``` diff
- require('./mock/request')
+ // require('./mock/request')
```
**build/webpack.dev.conf.js**
```diff
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
-   // before: require('../src/mock/index'), // 引入mock/request.js
+   before: require('../src/mock/index'), // 引入mock/request.js
    watchOptions: {
      poll: config.dev.poll,
    }
```
**src/mock/index.js**
``` javascript
  match('userInfo', 'post', 'success', {
    name: 'MrSosann',
    date: new Date().toLocaleDateString(),
    email: Random.email()
  })
```
1. 缺点:
    1. 无法热更新, 每次更改mock数据都需要重启前端服务(npm run dev)
2. 优点:
    1. 能够完美模拟出http请求, (包括可以抓包, 通过浏览器network查看)
    2. 影响范围仅在dev环境, 对build无影响, 无需手动更改任何配置

### 总结：
两种方式mock数据各有所长，目前尚未有最佳方案，后续优化TODO！！
为了最大程度减少切换两种mock方法的改动，只需要打开对应的require就ok，mock某一个接口的match函数，两种方法都一样，复制即可

## 5. Install `nodemon` and add src/uitl/index.js
### `nodemon`
``` bash
npm install -g nodemon
# 使用 nodemon 代替 node 即可实现监听文件改变，重启服务的目的
nodemon server.js
```

### src/uitl/index.js
> 前端工具函数
**src/main.js**
``` diff
+ import util from './util/index.js'
+ Vue.prototype.$util = util
```

### 配置 productionSourceMap
配置productionSourceMap参数能够让`npm run build`的时候，在dist目录下不生成`.map`的文件，`vue-cli`默认productionSourceMap值为true，所以build之后会有`.map`文件，十分耗时，将其关闭后能够极大减少build时间。
**config/index.js**
``` javascript
productionSourceMap: false,
```

# Reference
1. [vue-cli构建项目使用 less](https://www.cnblogs.com/zhuzhenwei918/p/6870340.html?utm_source=itdadao&utm_medium=referral)
2. [README教程](https://github.com/guodongxiaren/README)
3. [Mac使用tree生成目录结构](https://blog.csdn.net/qq673318522/article/details/53713903)

# 下面是 vue init 自带 Readme

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
