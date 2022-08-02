//搭建express服务
const express = require('express')

const user = express.Router()

user.get("/index", (req, res) => {
    console.log('用户页面');
    res.send('用户页面')
})

module.exports = user