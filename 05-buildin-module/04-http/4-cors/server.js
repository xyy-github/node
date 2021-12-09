// jsonp :浏览器端请求不跨域的特性
const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true)

  switch (urlObj.pathname) {
    case '/api/user':
        res.writeHead(200, {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          })
        res.write(`alert('hello')`)
        res.end()
      break
    default:
      res.end('404.')
      break
  }
})

app.listen(8090, () => {
  console.log('localhost:8090')
})