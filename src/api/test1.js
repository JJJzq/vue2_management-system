//搭建express服务
const express = require('express')
const app = express()
const home = require('./home')
const user = require('./user')




app.use("/home", home)
app.use("/user", user)


app.listen(3000, () => {
    console.log('3000端口');
})