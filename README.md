# koa-vue
简单的koa2 + vue 从零开始 with vue-cli

1. Create project with vue-cli
``` bash
# commit b8bcf6708dd23a69b935eec5e2db66e9b89d382a

npm install -g vue-cli
vue init webpack koa-vue
npm install
npm run dev
```

2. Init server end with koa2
``` bash
# commit 487661c869eadff3351ac4e5d1633e71fd3c2207

npm install --save busboy koa-router@7 koa-static koa-bodyparser@3
```


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
