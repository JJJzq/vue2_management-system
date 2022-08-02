//搭建express服务
const express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

//数据库配置
function connectionObj() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'x5',
        database: '2022_jzq',
        port: '3306'
    })
}

// 登录
app.post('/Login', (req, res) => {
    let body = req.body
    console.log('登陆结果', body)
    // console.log('调用登录接口');
    var connet = connectionObj()
    const sql = 'SELECT * FROM user_table where user = ? and password = ?'
    connet.query(sql, [body.ua, body.up], (err, result) => {
        if (err) {
            console.log('error', err);
            res.send({
                status: 400,
                message: '登录失败'
            })
        } else {
            if (result.length == 0) {
                console.log('账号或密码错误')
                res.send({
                    status: 300,
                    message: '密码或账号错误'
                })
            } else {
                console.log('查询结果', result)
                res.send({
                    status: 200,
                    data: result,
                    message: '登录成功'
                })
            }

        }

    })
})




//用户列表-----获取用户信息
app.get('/getUserList', function (req, res) {
    var connet = connectionObj()
    const sql = 'select * from user_list'
    connet.query(sql, (err, result) => {
        if (err) {
            console.log('error', err)
            return
        }
        console.log('成功获取用户数据:', result)
        res.send(result)
    })
    //关闭
    connet.end()
})


// 用户列表-----添加用户
app.get('/addUser', (req, res) => {
    console.log('添加用户')
    console.log('@@@@@', req.query);
    let id = req.query.id
    let name = req.query.name
    let address = req.query.address
    let job = req.query.job

    const sql = `insert into user_list (id,name,address,job,status) values ('${id}','${name}','${address}','${job}',1)`
    var connet = connectionObj()

    connet.query(sql, (err, result) => {
        if (err) {
            console.log('error', err)
            return
        }
        console.log('成功添加用户:', result)
        res.send(result)
    })
    //关闭
    connet.end()
})

//用户列表------修改状态
app.get('/changeUS', (req, res) => {
    console.log('执行修改状态')
    let ID = req.query.cID
    let status = req.query.cSta

    var connet = connectionObj()
    const sql = `update user_list set status=${status} where id = '${ID}'`
    connet.query(sql, (err, result) => {
        if (err) {
            console.log('error', err)
            return
        }
        console.log('成功更改用户状态:', result)
        res.send(result)
    })
    //关闭
    connet.end()

})

//用户列表------编辑用户信息
app.get('/changeUI', (req, res) => {
    console.log('执行编辑修改用户信息')
    let name = req.query.name
    let job = req.query.job
    let id = req.query.id
    let address = req.query.address


    console.log('@@@@@@@', name);
    // console.log('ID:',req.query.cID);

    var connet = connectionObj()
    const sql = `update user_list set name='${name}',job='${job}',address='${address}' where id = '${id}'`
    connet.query(sql, (err, result) => {
        if (err) {
            console.log('error', err)
            return
        }
        console.log('成功修改用户信息:', result)
        res.send(result)
    })
    //关闭
    connet.end()

})




app.listen(8888, () => {
    console.log('8888中间件启动')
})