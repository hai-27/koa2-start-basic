/*
 * @Description: 模块子路由汇总
 * @Author: hai-27
 * @Date: 2020-03-14 20:47:48
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 21:42:17
 */
const Router = require('koa-router');

let Routers = new Router();

const usersRouter = require('./router/usersRouter');

Routers.use(usersRouter.routes());

module.exports = Routers;