// 引入连接池
const db = require('../sql/index')

//查询所有信息
exports.uploadSc = (req, res) => {
  const sql = `select * from stu,course,sc where sc.sno=stu.sno and sc.cno = course.cno`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    if (results.length == 0) return res.cc('暂无数据')
    res.send({
        status: 0,
        message: '获取成功',
        data: results,
    })
  })
}
