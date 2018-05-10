if (process.env.NODE_ENV === 'development') {
  // match 接口方法
  const { match, Random } = require('./mock')
  // 通过mock数据方法0, 只需要在下面添加就ok
  // 需要使用mock方法1的话, 只要把下面的match复制进./index.js即可
  match('userInfo', 'post', 'success', {
    name: 'chuzhu',
    date: new Date().toLocaleDateString(),
    email: Random.email()
  })
  match('login', 'post', 'success', {
    token: 'mock request token',
    msg: '登录成功',
    name: 'chuzhu',
    date: new Date().toLocaleDateString(),
    email: Random.email()
  })
}
