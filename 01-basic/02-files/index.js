const fs = require('fs');

//写文件 ：（地址，内容，回调）
fs.writeFile('./log.txt', "hello", (err, data) => {
    if (err) {
    } else {
    }
})

//运行：Run Code