/*
 * @Description: 判断用户是否登录
 * @Author: hai-27
 * @Date: 2020-03-14 23:18:05
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 23:45:10
 */
module.exports = async (ctx, next) => {
  if (ctx.url.startsWith('/user/')) {
    if (!ctx.session.user) {
      ctx.body = {
        code: '401',
        msg: '用户没有登录，请登录后再操作'
      }
      return;
    }
  }
  await next();
};