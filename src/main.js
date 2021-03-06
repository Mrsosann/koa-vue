// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

// 引用API文件
import api from './api/index.js'
// 引用工具文件
import util from './util/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
// 将工具方法绑定到全局
Vue.prototype.$util = util

Vue.config.productionTip = false

// 引入 mockjs
require('./mock/request')

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
