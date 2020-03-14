/*
 * @Description: 用户模块控制器
 * @Author: hai-27
 * @Date: 2020-03-14 21:16:08
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 23:50:32
 */
const userDao = require('../models/dao/usersDao');
const { checkUserInfo } = require('../middleware/checkUserInfo');

module.exports = {
  /**
   * 用户登录
   * @param {Object} ctx
   */
  Login: async ctx => {

    let { userName, password } = ctx.request.body;

    // 校验用户信息是否符合规则
    if (!checkUserInfo(ctx, userName, password)) {
      return;
    }

    // 连接数据库根据用户名和密码查询用户信息
    let user = await userDao.Login(userName, password);
    // 结果集长度为0则代表没有该用户
    if (user.length === 0) {
      ctx.body = {
        code: '004',
        msg: '用户名或密码错误'
      }
      return;
    }

    // 数据库设置用户名唯一
    // 结果集长度为1则代表存在该用户
    if (user.length === 1) {

      const loginUser = {
        user_id: user[0].user_id,
        userName: user[0].userName
      };
      // 保存用户信息到session
      ctx.session.user = loginUser;

      ctx.body = {
        code: '001',
        user: loginUser,
        msg: '登录成功'
      }
      return;
    }

    //数据库设置用户名唯一
    //若存在user.length != 1 || user.length!=0
    //返回未知错误
    //正常不会出现
    ctx.body = {
      code: '500',
      msg: '未知错误'
    }
  }
};