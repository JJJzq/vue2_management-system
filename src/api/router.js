
const express = require('express')
const router = express.Router()

//导入数据库
const sqlFun = require('./mysql')

//测试路由接口
router.get('/', (req, res) => {
    res.send('hello')
})

//获取用户
router.get('/user_table', (req, res) => {
    const sql = "select * from user_table"
    sqlFun(sql, null, result => {
        if (result.lenth > 0) {
            res.send({
                status: 200,
                data: result
            })
        } else {
            res.send({
                status: 500,
                msg: '暂无数据'
            })
        }
    })
})

module.exports = router