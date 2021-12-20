const http = require('http')

http.createServer((req, res) => {
    // const urlString = req.url
    res.write('hello')
    res.end()
}).listen(8080, () => {
    console.log('done')
})