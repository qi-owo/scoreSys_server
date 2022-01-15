const express = require('express') // 引入express
const router = express.Router() // 实例化一个路由对象

//导入用户处理函数模块
const searchHandler = require('../router_handler/search')

//查询所有数据
router.post('/search', searchHandler.search)
router.get('/searchAll', searchHandler.searchAll)
// router.post('/searchSort',searchHandler.searchSort)



module.exports = router // 暴露出去方便管理