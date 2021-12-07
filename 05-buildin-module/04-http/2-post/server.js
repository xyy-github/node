const https = require('https')
const http = require('http')
const querystring = require('querystring')
const logger = require('../../logUtil')
const postData = querystring.stringify({
    province: '上海',
    city: '上海',
    district: '宝山区',
    address: '同济支路199号智慧七立方3号楼2-4层',
    latitude: 43.0,
    longitude: 160.0,
    message: '求购一条小鱼',
    contact: '13666666',
    type: 'sell',
    time: 1571217561
})

const options = {
    protocol: 'http:',
    hostname: 'localhost',
    method: 'POST',
    port: 5000,
    path: '/login',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

// function doPost() {
const re = http.createServer((request, response) => {
    let data
    let req = http.request(options, (res) => {
        // res.on('data', chunk => data += chunk)
        // res.on('end', () => {
        //     console.log(data)
        // })
    })
    logger.debug(querystring.parse(postData))
    req.write(postData)
    req.end()
})
re.listen(4000, () => {
    console.log("4000")
})

// }


//post攻击
// setInterval(() => {
//   doPost()
// }, 1000)