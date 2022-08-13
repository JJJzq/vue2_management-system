//搭建express服务
const express = require('express')

var mysql = require('mysql')

var bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())


app.use('/img/', express.static('static/images/'))
// app.use('/img/', express.static('./public/'))

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

//注册
app.post('/register', (req, res) => {
    let body = req.body
    console.log('注册', body)
    // console.log('调用登录接口');
    var connet = connectionObj()
    const sql1 = 'SELECT * FROM user_table where user = ?'  //查询是否已有账号
    const sql2 = `INSERT INTO user_table (user,password) VALUES('${body.ua}','${body.up}')` //注册新账号
    connet.query(sql1, [body.ua], (err, result) => {
        if (err) {
            console.log('error', err);
            res.send({
                status: 400,
                message: '注册失败'
            })
        } else {
            if (result.length) {
                res.send({
                    status: 300,
                    message: '账号已存在'
                })
            } else {
                connet.query(sql2, [body.ua, body.up], (err, result) => {
                    if (err) {
                        console.log('error', err);
                        res.send({
                            status: 400,
                            message: '注册失败'
                        })
                    } else {
                        res.send({
                            status: 200,
                            data: result,
                            message: '注册成功'
                        })
                    }
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


//引入配置好的multerConfig
const multerConfig = require('./multerConfig');
const multerConfig1 = require('./multerConfig1');
//定义静态变量
// const fileName = "file"  // 上传的 fileName 名称
const updateBaseUrl = "http://localhost:8888" // 上传到服务器地址
const imgPath = "/img/images/" // 上传到服务器的虚拟目录

// 上传图片文件
function uploadImgfile(req, res) {
    return new Promise((resolve, reject) => {
        multerConfig.single("file")(req, res, function (err) {
            if (err) {
                reject(err)
            } else {
                // console.log('!!!', req.file)
                // `req.file.filename`  请求文件名称后缀 
                // `updateBaseUrl + imgPath + req.file.filename` 完整的服务器虚拟目录
                // resolve(updateBaseUrl + imgPath + req.file.filename)
                resolve(req.file)
            }
        });
    })
}
// 上传图片地址
function uploadImgSrc(req, res) {
    return new Promise((resolve, reject) => {
        multerConfig1.single("file")(req, res, function (err) {
            if (err) {
                reject(err)
            } else {
                // console.log('!!!', req.file)
                // `req.file.filename`  请求文件名称后缀 
                // `updateBaseUrl + imgPath + req.file.filename` 完整的服务器虚拟目录
                resolve(updateBaseUrl + imgPath + req.file.filename)
                // resolve(req.file)
            }
        });
    })
}


// 上传图片
app.post('/upLoadImg', (req, res) => {
    // 生成随机数id
    let id = '';
    for (var i = 0; i < 9; i++) {
        id += Math.floor(Math.random() * 10);
    }

    var connet = connectionObj()
    uploadImgfile(req, res).then(imgFile => {
        console.log('@', imgFile)
        if (imgFile === undefined) {
            console.log('上传失败')
            res.send({
                state: 400,
                message: '上传失败'
            })
        } else {
            const sql = `insert into images (id,filename,content) values (?,?,?) `
            connet.query(sql, [id, imgFile.originalname, imgFile.buffer], (err, result) => {
                if (err) {
                    console.log('上传失败', err)
                    res.send({
                        state: 400,
                        message: '上传失败'
                    })
                } else {
                    console.log('上传成功', result)
                    res.send({
                        state: 200,
                        message: '上传成功',
                        data: imgFile
                    })
                }
            })
            connet.end()
        }
    })


})

// 下载图片
app.get('/downLoadImg', (req, res) => {
    var connet = connectionObj()
    const sql = `select * from images`
    connet.query(sql, (err, result) => {
        console.log('!!!', result)
        if (err) {
            console.log('下载失败', err)
            res.send({
                state: 400,
                message: '下载失败',
                err: err.message
            })
        } else {
            console.log('下载成功', result)
            res.set({
                'Content-Type': 'image/jpeg',
                'Accept-Ranges': 'bytes',
                'Content-Disposition': 'attachment;filename="filename.jpg"'
            })
            res.send(
                result[7].content
            )
        }
    })
    connet.end()
})


// 获取图片
app.get('/getImg', (req, res) => {
    console.log('!!!', req.query.id)

    var connet = connectionObj()
    const sql = `select content from images where id = '${req.query.id}'`
    connet.query(sql, (err, result) => {
        if (err) {
            res.send({
                status: 400,
                msg: '失败',
                message: err.message
            })
        } else {
            
            console.log('查询结果', result)
            res.send({
                result
            })
        }
    })
})



app.listen(8888, () => {
    console.log('8888中间件启动')
})