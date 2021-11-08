//请求网络数据
const http = require('https')
http.get('https://aldh5.tmall.com/recommend2.htm?&appId=201602265,201602267,07055,201602266,2016030118,09044,201605170,201612221,201606279,2016062710&callback=jsonp_31960259', (res) => {
    let str = ''
    res.on('data', (thunk) => { //收集流
        str += thunk
    })
    res.on('end', () => { //结束
        console.log(str)
    })
})
//运行：右键：run code