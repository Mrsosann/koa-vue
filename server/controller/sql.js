// 数据库的操作
const { query } = require('../db/db')
// 根据用户名查找用户
async function findUser (username) {
  let sql = `select * from user where email='${username}'`
  let dataList = await query(sql)
  return dataList
}
// 登录存储token
async function updateToken (username, token) {
  let sql = `update user set token='${token}' where email='${username}'`
  let result = await query(sql)
  return result.serverStatus * 1 === 2
}

module.exports = {
  findUser,
  updateToken
}
