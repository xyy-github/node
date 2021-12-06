var log4js = require("log4js"); 
const logger = log4js.getLogger();
logger.level = 'debug'


const url = require('url')
const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

// 很重要开，可以看看官网：https://nodejs.org/dist/latest-v16.x/docs/api/url.html#new-urlsearchparams

// 常用示例：
const newserchParams = new URLSearchParams(url.parse(urlString).search); //转成对象，查看search
//logger.debug(newserchParams.get('id'))//拿到search中的Id


// 1.【string】
//解析请求字符串，获得某参数
logger.debug(new URLSearchParams('user=abc&query=xyz').get('user'))
//[2021-12-06T11:54:15.873] [DEBUG] default - abc
logger.debug(new URLSearchParams('user=abc&query=xyz').toString())
//[2021-12-06T11:54:54.452] [DEBUG] default - user=abc&query=xyz


//2.【object】 
logger.debug(new URLSearchParams({
    user: 'abc',
    query: ['first', 'second']
}).getAll('user'))
//[2021-12-06T11:55:56.964] [DEBUG] default - [ 'abc' ]
logger.debug(new URLSearchParams({
    user: 'abc',
    query: ['first', 'second']
}).toString())
//[2021-12-06T11:57:20.143] [DEBUG] default - user=abc&query=first%2Csecond

//3.【iterable】键值对 ---map
logger.debug(
    new URLSearchParams([
        ['user', 'abc'],
        ['query', 'first']
    ]).toString()
)
//[2021-12-06T12:00:02.290] [DEBUG] default - user=abc&query=first
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
logger.debug(params.toString())
// /[2021-12-06T12:01:05.810] [DEBUG] default - user=abc&query=xyz

/* logger.debug(new URLSearchParams([
    ['user', 'abc', 'error'],
]).toString()) 

Each query pair must be an iterable [name, value] tuple
*/