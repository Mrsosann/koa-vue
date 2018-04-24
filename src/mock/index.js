// 使用 Mock
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// Mock 一组数据
// Mock.mock('/api/v1/userInfo', 'post', {
//   status: 'success',
//   data: {
//     name: 'chuzhu',
//     date: new Date().toLocaleDateString(),
//     email: Random.email()
//   }
// })

module.exports = function (app) {
  // 监听 http 请求
  app.post('/api/v1/userInfo', (req, res) => {
    res.json(Mock.mock({
      status: 'success',
      data: {
        name: 'chuzhu111',
        date: new Date().toLocaleDateString(),
        email: Random.email()
      }}))
  })
}
