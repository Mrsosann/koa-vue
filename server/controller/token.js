const jwt = require('jsonwebtoken')

// 登录时：核对用户名和密码成功后，应用将用户的username作为JWT Payload的一个属性
const createToken = function (username) {
  const token = jwt.sign({
    username: username
  }, 'chudazhu', {
    expiresIn: '60s' // 过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 + 设置的值
  })
  return token
}

const checkToken = async (ctx, next) => {
  // 检查token是否存在及是否过期
  if (ctx.request.header['authorization']) {
    let token = ctx.request.header['authorization'].split(' ')[1]
    // 解码token
    let decoded = jwt.decode(token, 'chudazhu')
    console.log(`checkToken decoded: ${JSON.stringify(decoded)}`)
    if (token && decoded.exp <= new Date() / 1000) {
      ctx.status = 401
      ctx.body = {
        status: 'fail',
        err: {
          code: 1,
          message: 'token过期'
        }
      }
    } else {
      // 如果权限没问题，那么交个下一个控制器处理
      return next()
    }
  } else {
    ctx.status = 401
    ctx.body = {
      status: 'fail',
      err: {
        code: 0,
        message: '没有token'
      }
    }
  }
  // const authorization = ctx.get('Authorization')
  // if (authorization === '') {
  //   ctx.throw(401, 'no token detected in http header Authorization')
  // }
  // const token = authorization.split(' ')[1]
  // try {
  //   await jwt.verify(token, 'sinner77') // 如果token过期或验证失败，将抛出错误
  // } catch (err) {
  //   ctx.throw(401, 'invalid token')
  // }
  // await next()
}

module.exports = {
  createToken,
  checkToken
}
