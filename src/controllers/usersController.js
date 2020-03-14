/*
 * @Description: 用户模块控制器
 * @Author: hai-27
 * @Date: 2020-03-14 21:16:08
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 21:17:37
 */
module.exports = {
  /**
   * 用户登录
   * @param {Object} ctx
   */
  Login: async ctx => {
    ctx.body = {
      code: '001',
      msg: '进来登录了'
    }
  }
};