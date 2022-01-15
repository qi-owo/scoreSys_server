const express = require('express') // 引入express
const router = express.Router() // 实例化一个路由对象

//导入用户处理函数模块
const deleteHandler = require('../router_handler/delete')

router.post('/deleteSC', deleteHandler.deleteSc) //删除成绩
router.post('/reviseSc', deleteHandler.reviseSc) //修改成绩
router.post('/addSc', deleteHandler.addSc) //修改成绩
router.post('/revisePassword',deleteHandler.revisePassword) //修改密码

module.exports = router // 暴露出去方便管理