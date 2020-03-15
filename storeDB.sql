/*
 * @Description: 数据库设计
 * @Author: hai-27
 * @Date: 2020-03-15 14:11:24
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-15 14:11:46
 */

create database storeDB;
use storeDB;
create table users(
  user_id int primary key auto_increment,
  userName char (20) not null unique,
  password char (20) not null,
  userPhoneNumber char(11) null
);
-- insert into users
-- values(null, 'admin', '123456', '13580018623');