// 使用 Mock
const Mock = require('mockjs')
// 获取 mock.Random 对象
exports.Random = Mock.Random
// 接口前置URL
const apiPreUrl = require('../config/index').base.apiPreUrl

/**
 *
 * @param {string} url 请求地址
 * @param {string} method 请求方法
 * @param {string} status 返回status字段
 * @param {{}} res 返回data/error内容
 */
exports.match = (url, method, status, res) => {
  /**
   * mock 数据 方法0
   * 在 ./main.js 文件 中引入 require('./mock/index')
   * 缺点:
   * 1. 所有http请求都不再走网络, 直接由mockjs拦截下来
   * 2. 无法抓包（无http请求）, 浏览器network中看不到请求
   * 3. 在前端项目build之后, 请求还是会走mockjs, 所以build之前需要手动移除main.js中的require
   * 4. 即会和前端代码一起打包到bunlde.js中发布到product环境
   * 优点:
   * 1. 直接配置在前端, 跟vue-cli一起打包
   * 2. 能够使用vue-cle配置好的热更新, 可以实时更改mock数据
  */
  res.mock = {
    open: true,
    type: 0
  }
  Mock.mock(`${apiPreUrl}/${url}`, method, status === 'success' ? {
    status: 'success',
    data: res
  } : {
    status: 'fail',
    error: res
  })
}
