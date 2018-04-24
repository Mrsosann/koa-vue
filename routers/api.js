const router = require('koa-router')()

const routers = router
  .get('/user/getUserInfo', async ( ctx )=>{
    ctx.body = {
      status: 'success',
      data: {
        name: 'chuzhu'
      }
    }
  })

module.exports = routers
