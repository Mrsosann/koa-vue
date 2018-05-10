// sha1密码加密
const sha1 = require('sha1')
const createToken = require('./token').createToken
// 数据库的操作
// const { query } = require('../db/db')
const { findUser, updateToken } = require('./sql')
const { wrapResponseBody } = require('../util')

// 登录
const Login = async (ctx) => {
  // 拿到账号和密码
  let username = ctx.request.body.username
  let password = sha1(ctx.request.body.password)
  let rows = await findUser(username)
  if (!rows || rows.length === 0) {
    console.log('检查到用户名不存在')
    ctx.status = 200
    ctx.body = wrapResponseBody(0, {
      code: 0,
      msg: '账户不存在'
    })
  } else if (rows[0].password === password) {
    console.log(`密码一致，${rows[0].email} 登录成功！`)
    // 生成一个新的token,并存到数据库
    let token = createToken(username)
    if (await updateToken(username, token)) {
      ctx.status = 200
      ctx.body = wrapResponseBody(1, {
        msg: '登录成功',
        token
      })
    } else {
      console.log('token存储失败')
      ctx.status = 200
      ctx.body = wrapResponseBody(0, {
        code: 2,
        msg: '服务异常'
      })
    }
  } else {
    console.log('密码错误!')
    ctx.status = 200
    ctx.body = wrapResponseBody(0, {
      code: 1,
      msg: '密码错误'
    })
  }
}

module.exports = {
  Login
}
