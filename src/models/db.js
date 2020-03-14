/*
 * @Description: 数据库连接
 * @Author: hai-27
 * @Date: 2020-03-14 22:21:48
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-15 02:12:41
 */
var mysql = require('mysql');
const { dbConfig } = require('../config.js');
var pool = mysql.createPool(dbConfig);

var db = {};

db.query = function (sql, params) {

  return new Promise((resolve, reject) => {
    // 取出链接
    pool.getConnection(function (err, connection) {

      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, params, function (error, results, fields) {
        console.log(`${ sql }=>${ params }`);
        // 释放连接
        connection.release();
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });

    });
  });
}
// 导出对象
module.exports = db;
