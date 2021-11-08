const http = require('http')
const server = http.createServer((request, response) => { //非结构，顺序不能颠倒
    let url = request.url;
    response.write(url)
    response.end()
})
server.listen(8090, 'localhost', () => {
    console.log('localhost:8090')
})
//运行 ：右键 Run Code