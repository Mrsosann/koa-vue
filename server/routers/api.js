const router = require('koa-router')()

const routers = router
  .get('/user/userInfo', async (ctx) => {
    ctx.body = {
      status: 'success',
      data: {
        name: 'chudazhu'
      }
    }
  })
  .post('/userInfo', async (ctx) => {
    ctx.body = {
      status: 'success',
      data: {
        name: 'chudazhu123',
        email: '243906076@qq.com'
      }
    }
  })

module.exports = routers
