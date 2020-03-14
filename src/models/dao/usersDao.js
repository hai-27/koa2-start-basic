/*
 * @Description: 用户模块数据持久层
 * @Author: hai-27
 * @Date: 2020-03-14 23:26:24
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 23:50:15
 */
const db = require('../db.js');

module.exports = {
  // 连接数据库根据用户名和密码查询用户信息
  Login: async (userName, password) => {
    const sql = 'select * from users where userName = ? and password = ?';
    return await db.query(sql, [userName, password]);
  }
}