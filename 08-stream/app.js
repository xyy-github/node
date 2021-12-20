const fs = require('fs')
const zlib = require('zlib')
// const gzip = zlib.createGzip()

//创建logs.txt文件，并写入hello
// fs.writeFile('./logs.txt','hello',(err)=>{
//     console.log('done')
// })

const readStream = fs.createReadStream('./logs.txt')
const writeStream = fs.createWriteStream('./logs2.txt')

// readStream.pipe(gzip).pipe(writeStream)

writeStream.write(readStream)