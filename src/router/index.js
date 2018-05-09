import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Login from '@/page/login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index
  }, {
    path: '/content/:name',
    component: Content,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  }, {
    path: '/login',
    component: Login
  }
]

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  routes
})

export default router
