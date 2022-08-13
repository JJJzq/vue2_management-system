const express = require('express')
const multer = require('multer')
const app = express()

const storage = multer.diskStorage({
    //保存路径
    destination: function (req, file, cb) {
        cb(null, 'uploads')
        //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
    },
    //保存在 destination 中的文件名
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({ storage: storage })

app.post('/upLoadImg', upload.single('file'), function (req, res) {
    console.log('@', req.file)
    console.log('@@', req.body)
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
})



// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
// req.files 是 `photos` 文件数组的信息
// req.body 将具有文本域数据，如果存在的话
// })
// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
// req.files 是一个对象 (String -> Array) 键是文件名，值是文件数组
// 例如：
//  req.files['avatar'][0] -> File
//  req.files['gallery'] -> Array
// req.body 将具有文本域数据，如果存在的话
// })

app.listen(8888, () => {
    console.log('8888中间件启动')
})