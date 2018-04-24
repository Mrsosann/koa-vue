const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const Router = require('koa-router')
const static = require('koa-static')

const app = new Koa()

let router = new Router()
const routers = require('./routers/index')
// 初始化路由中间件
app
  .use(routers.routes())
  .use(routers.allowedMethods())

// 前端资源路径
const distPath = './dist'
app.use(static(
  path.join( __dirname,  distPath)
))
// 服务器静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = '404 page!'
})


app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})