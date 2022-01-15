// 引入连接池
const db = require('../sql/index')

//删除成绩
exports.deleteSc = (req, res) => {
  const { sno, cno } = req.body
  const sql = `delete from sc where sno=${sno} and cno = ${cno}`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    console.log(results);
    if (results.affectedRows == 0) return res.cc('删除失败')
    res.send({
      status: 0,
      message: '删除成功'
    })
  })
}

//修改成绩
exports.reviseSc = (req, res) => {
  const { sno, cno, grade } = req.body
  const sql = `update sc set grade=${grade} where sno=${sno} and cno = ${cno}`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    console.log(results);
    if (results.affectedRows == 0) return res.cc('修改失败')
    res.send({
      status: 0,
      message: '修改成功'
    })
  })
}

//插入成绩
exports.addSc = (req, res) => {
  const values = []
  const arr = req.body
  arr.map(item => {
    values.push(Object.values(item))
  })
  console.log(values);
  const sql = `INSERT INTO sc(sno,cno,grade) VALUES ?;`
  db.query(sql, [values], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows == 0) return res.cc('插入失败')
    res.send({
      status: 0,
      message: '插入成功'
    })
  })
}

//修改密码
exports.revisePassword = (req, res) => {
  const { userid,password } = req.body
  const sql = `update user set password='${password}' where userid='${userid}'`
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    console.log(results);
    if (results.affectedRows == 0) return res.cc('修改失败')
    res.send({
      status: 0,
      message: '修改成功'
    })
  })
}