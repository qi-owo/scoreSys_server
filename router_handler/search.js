// 引入连接池
const db = require('../sql/index')


//查询所有信息
exports.search = (req, res) => {
  //接收表单数据
  // const { page } = req.body
  // const pageSize = 10
  // const sql = `select * from stu,course,sc where sc.sno=stu.sno and sc.cno = course.cno limit ${page * (pageSize - 1)},${pageSize}`
  const sql = `select * from stu, course, sc, academy, major where sc.sno = stu.sno and sc.cno = course.cno and academy.yno = major.yno and stu.mno = major.mno`
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

//多条件查询
exports.searchAll = (req, res) => {
  // 多条件查询，动态拼接sql
  let sql = `select * from stu, course, sc, academy, major where sc.sno = stu.sno and sc.cno = course.cno and academy.yno = major.yno and stu.mno = major.mno`
  if (req.query.sname !== '') sql = sql + " and sname= '" + req.query.sname + "'"
  if (req.query.sno !== '') sql = sql + " and stu.sno= '" + req.query.sno + "'"
  if (req.query.yname !== '') sql = sql + " and yname= '" + req.query.yname + "'"
  if (req.query.mname !== '') sql = sql + " and mname= '" + req.query.mname + "'"
  if (req.query.cname !== '') sql = sql + " and cname= '" + req.query.cname + "'"
  if (req.query.class !== '') sql = sql + " and class= '" + req.query.class + "'"
  console.log(sql);
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




//按照成绩排名
// exports.searchSort = (req, res) => {
//   //接收表单数据
//   const { order } = req.body
//   //升序up 降序down
//   const sql = order === 'up'?`select * from stu,course,sc where sc.sno=stu.sno and sc.cno = course.cno order by sc.grade`: `select * from stu,course,sc where sc.sno=stu.sno and sc.cno = course.cno order by sc.grade desc`
//   db.query(sql, (err, results) => {
//     if (err) return res.cc(err)
//     if (results.length == 0) return res.cc('获取失败')
//       res.send({
//         status: 0,
//         message: '获取成功',
//         data: results,
//     })
//   })
// }