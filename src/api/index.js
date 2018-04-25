/* eslint-disable no-new */
// 配置API接口地址
var root = require('../config/index').base.apiPreUrl
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/*
  接口处理函数
*/
/* eslint-disable no-new */
function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: (method === 'POST' || method === 'PUT') ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      // res 是一个类似 xhr 的对象, 包括 http status 200,
      // res.data 是后端接口返回的整个结果, 包括状态
      if (res.data.status === 'success') {
        success && success(res.data.data)
      } else if (res.data.status === 'fail') {
        failure && failure(res.data.err)
      } else {
        throw new Error(JSON.stringify(res))
      }
    })
    .catch(function (err) {
      // TODO: 增加统一错误处理上报
      console.error('***** api error, err: *****')
      console.log(err)
      // let res = err.response
      // if (err) {
      //   console.error('api error, HTTP CODE: ' + res.status)
      // }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
