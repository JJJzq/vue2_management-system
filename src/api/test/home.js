//搭建express服务
const express = require('express')

const home = express.Router()

home.get("/index", (req, res) => {
    console.log('主页');
    res.send('主页')
})

home.get("/getUser", (req, res) => {
    console.log('主页获取用户信息');
    res.send('主页获取用户信息')
})

module.exports = home 