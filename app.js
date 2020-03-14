/*
 * @Author: hai-27
 * @Date: 2020-03-14 20:14:45
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 20:36:34
 */
const Koa = require('koa');

let { Port } = require('./config');

let app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

// 监听服务器启动端口
app.listen(Port, () => {
  console.log(`服务器启动在${ Port }端口`);
});