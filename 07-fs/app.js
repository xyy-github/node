const fs = require('fs')

//当前目录创建文件夹
fs.mkdir('logs', (err) => {
    //错误优先的回调函数
    if (err) throw err
    console.log('文件夹创建成功')
})
//修改文件夹名字
