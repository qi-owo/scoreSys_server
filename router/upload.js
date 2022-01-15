const express = require('express') // 引入express
const router = express.Router() // 实例化一个路由对象

//导入用户处理函数模块
const uploadHandler = require('../router_handler/upload')

router.post('/uploadSc', uploadHandler.uploadSc) //上传成绩

module.exports = router // 暴露出去方便管理