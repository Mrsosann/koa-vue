module.exports = {
  /**
   *
   * @param {number} status 1表示success,0表示fail
   * @param {{}} res 返回主体
   */
  wrapResponseBody (status, res) {
    if (status === 1) {
      return {
        status: 'success',
        data: res,
        err: null
      }
    } else if (status === 0) {
      return {
        status: 'fail',
        data: null,
        err: res
      }
    }
  }
}
