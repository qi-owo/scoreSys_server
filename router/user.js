const express = require('express') // 引入express
const router = express.Router() // 实例化一个路由对象

//导入用户处理函数模块
const userHandler = require('../router_handler/user')

//登录
router.post('/login',userHandler.login )

module.exports = router // 暴露出去方便管理