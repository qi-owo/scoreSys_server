/* sql/index.js文件 */

// 引入mysql数据库
const mysql = require('mysql2')
// 数据库连接池的配置
const db = mysql.createConnection({
  connectionLimit: 10,  // 连接池的大小
  host: 'localhost', // 主机名
  user: 'root',  // 用户名
  password: 'root123', // 密码
  database: 'score', // 数据库名称
  charset: 'utf8mb4'
});
// 暴露连接池
module.exports = db