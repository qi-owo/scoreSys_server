const express = require('express') // 引入express包
const app = express() // 创建express实例
const cors = require('cors') //引入跨域中间件
const bodyParser = require('body-parser')

app.use(cors()) //配置跨域中间件
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })//解析x-www

//失败请求
app.use(function (req,res,next) {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

//导入user路由
const userRouter = require("./router/user")
app.use('/api', jsonParser, userRouter)
//导入search路由
const searchRouter = require("./router/search")
app.use('/api', urlencodedParser, searchRouter)
//导入delete路由
const deleteRouter = require("./router/delete")
app.use('/api', urlencodedParser, deleteRouter)
//导入upload路由
const uploadRouter = require("./router/upload")
app.use('/api',urlencodedParser, uploadRouter)


// 在9999端口上启动后端服务
app.listen(9999, (req, res) => {
    console.log('http://localhost:9999');
})