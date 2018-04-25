// 使用 Mock
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// 接口前置URL
const apiPreUrl = require('../config/index').base.apiPreUrl

/**
 * mock 数据 方法1
 * 使用 webpack.dev.conf.js 配置, 只在 dev 环境中调用 webpack 钩子 before 来引入 mockjs, 并加载到 vue-cli 启动的服务器上
 * 缺点:
 * 1. 无法热更新, 每次更改mock数据都需要重启前端服务(npm run dev)
 * 优点:
 * 1. 能够完美模拟出http请求, (包括可以抓包, 通过浏览器network查看)
 * 2. 影响范围仅在dev环境, 对build无影响, 无需手动更改任何配置
 */
module.exports = function (app) {
  /**
   *
   * @param {string} url 请求地址
   * @param {string} method 请求方法
   * @param {string} status 返回status字段
   * @param {{}} res 返回data/error内容
   */
  const match = (url, method, status, res) => {
    res.mock = {
      open: true,
      type: 1
    }
    app[method](`${apiPreUrl}/${url}`, (request, response) => {
      response.json(Mock.mock(status === 'success' ? {
        status: 'success',
        data: res
      } : {
        status: 'fail',
        error: res
      }))
    })
  }

  // 需要使用mock方法1的话, 只要把./request.js的match复制进来即可
  match('userInfo', 'post', 'success', {
    name: 'chuzhu111',
    date: new Date().toLocaleDateString(),
    email: Random.email()
  })

  // 监听 http 请求
  // app.post('/api/v1/userInfo', (req, res) => {
  //   res.json(Mock.mock({
  //     status: 'success',
  //     data: {
  //       name: 'chuzhu111',
  //       date: new Date().toLocaleDateString(),
  //       email: Random.email()
  //     }}))
  // })
}
