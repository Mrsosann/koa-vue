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
        name: 'chudazhu'
      }
    }
  })

module.exports = routers
