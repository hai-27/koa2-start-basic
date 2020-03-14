/*
 * @Description: 全局配置信息
 * @Author: hai-27
 * @Date: 2020-03-14 20:27:52
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-14 22:51:29
 */
const path = require('path');

module.exports = {
  Port: 5000, // 启动端口
  staticDir: path.resolve('./public'), // 静态资源路径
  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'storeDB'
  }
}