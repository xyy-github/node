const logger =require('../../logUtil')
const querystring = require('querystring')


const http = require('http')
const https = require('https')
const server = http.createServer((request, response) => {
    // logger.debug(request)
    // debugger

    const url = request.url
    let data = {}
    https.get('https://testdemo.medevid.cn/api/v1/report/cloud/template?isPublic=1', (request) => {
        request.on('data', (thunk) => {
            data += thunk
        })
        request.on('end', () => {
            response.writeHead(200, {
                'content-type': 'application/json;charset=utf-8' //application/json;charset=utf-8
            })
            response.write(data) //{"timestamp":1638781564888,"status":415,"error":"Unsupported Media Type","path":"/cloud/template"}

            logger.debug(data)
            // response.write('<div>第一个回显</div>')
            // response.write(`{"url":"${url}"}`)
            // response.write(JSON.stringify(querystring.parse(data)))
            response.end()
        })
    })


})
server.listen(8080, () => {
    console.log('localhost:8080')
})
//运行方式
//1: 根目录：node server.js
//2: 根目录：node --inspect --inspect-brk server.js （浏览器打开调试） 

//node进程管理工具
/* supervisor ；nodemon（本地调试使用）；forever；pm2 */
// 安装nodemon：npm i nodemon ; 使用：nodemon server.js(更改代码时，将自动运行终端)