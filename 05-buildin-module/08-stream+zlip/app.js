const fs = require('fs')

//创建logs.txt文件，并写入hello
// fs.writeFile('./logs.txt','hello',(err)=>{
//     console.log('done')
// })

const zlib = require('zlib')
const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./logs.txt')
const writeStream = fs.createWriteStream('./logs2.gzip')

readStream.pipe(gzip).pipe(writeStream) 
