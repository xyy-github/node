var http = require('http')
var fs = require('fs')
var mime = require('mime')


http.createServer(function (req, res) {
    //路由 
    /* 方式一： */
    //   switch ( req.url ) {
    //     case '/home':
    //       res.write('home')
    //       res.end()
    //       break
    //     case '/mine':
    //       res.write('mine')
    //       res.end()
    //       break
    //     case '/login': 
    //       fs.readFile( './static/login.html',function ( error , data ) {
    //         if ( error ) throw error  
    //         res.write( data )
    //         res.end()
    //       })
    //       break
    //     case '/flower.jpeg':
    //       fs.readFile( './static/flower.jpeg', 'binary', function( error , data ) {
    //         if( error ) throw error 
    //         res.write( data, 'binary' )
    //         res.end()
    //       })
    //       break
    //     default: 
    //       break
    //    }
    /* 方式二： */
    const reqUrl = req.url
    // const type=mime.getType(reqUrl.split('.')[1])
    // console.log(type)
    // res.writeHead(200, {
    //     'content-type': type
    // })
    const file = fs.readFileSync(`.${reqUrl}`)
    res.end(file)

}).listen(8000, 'localhost', function () {
    console.log('服务器运行在： http://localhost:8000')
})