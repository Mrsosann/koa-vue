const router = require('koa-router')()
// checkToken作为中间件存在
const checkToken = require('../controller/token').checkToken
const UserController = require('../controller/user')

const routers = router
  .get('/user/userInfo', async (ctx) => {
    ctx.body = {
      status: 'success',
      data: {
        name: 'chudazhu'
      },
      err: null
    }
  })
  .post('/userInfo', checkToken, async (ctx) => {
    ctx.body = {
      status: 'success',
      data: {
        name: 'chudazhu123',
        email: '243906076@qq.com'
      },
      err: null
    }
  })
  .post('/login', UserController.Login)

module.exports = routers
