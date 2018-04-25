# koa-vue
简单的koa2 + vue 从零开始 with vue-cli

##1. Create project with vue-cli
``` bash
# commit b8bcf6708dd23a69b935eec5e2db66e9b89d382a

npm install -g vue-cli
vue init webpack koa-vue
npm install
npm run dev
```

##2. Init server end with koa2
``` bash
# commit 487661c869eadff3351ac4e5d1633e71fd3c2207

npm install --save busboy koa-router@7 koa-static koa-bodyparser@3
```

##3. Install mockjs less, Update Eslint
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
本人使用的编辑器为vscode, 安装对应的编辑器插件(ESLint, Vetur)
vue-cli建立项目根目录会自带.eslintrc.js文件
此项目用的lint为standard

** 如果编辑器仍不实时报错的话, 可以试试以下操作 **
``` bash
# 全局安装eslint
npm i eslint -g

# 能够校验html 和 .vue 文件
npm i eslint-plugin-html -g
```
** 并在vscode设置中增加个性设置(settings.json) **
```
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
```
以上设置能保证vscode识别js, html, vue文件, 并进行Code lint
如果不需要保存自动修复一些语法错误可以关闭 * "eslint.autoFixOnSave" *


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
