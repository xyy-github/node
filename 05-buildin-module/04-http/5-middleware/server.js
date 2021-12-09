const http = require('http')
const proxy = require('http-proxy-middleware')
const express = require('express');
const {
    createProxyMiddleware
} = require('http-proxy-middleware');

const app = express();

http.createServer((req, res) => {
    let url = req.url

    if (/^\/api/.test(url)) {
      
        let apiProxy = app.use('/api', createProxyMiddleware({
            target: 'https://m.lagou.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }));

        // http-proy-middleware 在Node.js中使用的方法
        apiProxy(req, res)
    } else {
        switch (url) {
            case '/index.html':
                res.end('index.html')
                break
            case '/search.html':
                res.end('search.html')
                break
            default:
                res.end('[404]page not found.')
        }
    }
}).listen(8090)