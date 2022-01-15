// 引入node-xlsx包
const xlsx = require('node-xlsx') 
// 引入连接池
const db = require('../sql/index')

exports.login = (req, res) => {
  console.log(req.body);
  //接收表单数据
  const {userid ,password} = req.body
  //定义sql
  const sql = 'select * from user where userid=?'
  //执行
  db.query(sql, userid, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('登录失败')
    //判断密码
    const sql2 = `select * from user where userid='${userid}' and password='${password}'`

    db.query(sql2, (err, results) => {
      if (err) return res.cc(err)
      if (results.length !== 1) return res.cc('登录失败')
      res.send({
        status:0,
        message:'登录成功',
        data:results
      })
    })
  })
}