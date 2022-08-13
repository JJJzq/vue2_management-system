// 1. 引入依赖
const multer = require('../../node_modules/multer/index');
const md5 = require('../../node_modules/md5/md5');

// 2. 引入工具
const path = require('path') //
const resolve = (dir) => {
    return path.join(__dirname, './', dir)
}

// 存储到本地
// 3. multer的配置对象
// let storage = multer.diskStorage({

//     // 3.1 存储路径
//     destination: function (req, file, cb) {
//         // 3.1.1 允许图片上传
//         if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//             cb(null, resolve('static/images'))
//         } else {
//             // 3.1.2 限制其他文件上传类型
//             cb({ error: 'Mime type not supported' })
//         }

//     },
//     //  3.2 存储名称
//     filename: function (req, file, cb) {
//         // let fileFormat = (file.originalname).split(".");
//         // cb(null, md5(+new Date()) + "." + fileFormat[fileFormat.length - 1]);
//         cb(null, md5(+new Date()) + "@" + file.originalname);
//     },



// });

// 存储到数据库
const storage = multer.memoryStorage()




// 4. 添加配置
const multerConfig = multer({
    storage: storage,
});

// 5. 导出配置好的multerConfig
module.exports = multerConfig;
