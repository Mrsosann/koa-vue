// sha1密码加密
const sha1 = require('sha1')
const createToken = require('./token').createToken
// 数据库的操作
// 根据用户名查找用户
const findUser = (username) => {
  return new Promise((resolve, reject) => {
    // User.findOne({ username }, (err, doc) => {
    //   if (err) {
    //     reject(err)
    //   }
    //   resolve(doc)
    // })
    resolve({
      username: '123456',
      password: sha1('123456')
    })
  })
}
// 登录
const Login = async (ctx) => {
  console.log(ctx.request.body)
  // 拿到账号和密码
  let username = ctx.request.body.username
  let password = sha1(ctx.request.body.password)

  let doc = await findUser(username)
  if (!doc) {
    console.log('检查到用户名不存在')
    ctx.status = 200
    ctx.body = {
      status: 'fail',
      data: null,
      err: {
        code: 0,
        msg: '账户不存在'
      }
    }
  } else if (doc.password === password) {
    console.log('密码一致，登录成功！')

    // 生成一个新的token,并存到数据库
    let token = createToken(username)
    console.log(token)
    doc.token = token
    await new Promise((resolve, reject) => {
      // doc.save((err) => {
      //   if (err) {
      //     reject(err)
      //   }
      //   resolve()
      // })
      resolve()
    })

    ctx.body = {
      status: 'success',
      data: {
        msg: '登录成功！',
        token
      },
      err: null
    }
  } else {
    console.log('密码错误!')
    ctx.status = 200
    ctx.body = {
      status: 'fail',
      data: null,
      err: {
        code: 1,
        msg: '密码错误'
      }
    }
  }
}

module.exports = {
  Login
}
