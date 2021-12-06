var log4js = require("log4js"); //记录日志 npm i log4js 

log4js.configure({
    appenders: {
        cheese: {
            type: "file",
            filename: "cheese.log" //打印的日志会依次写到cheese.log文件
        }
    },
    categories: {
        default: {
            appenders: ["cheese"],
            level: "error"
        }
    }
});

const logger = log4js.getLogger("cheese");
logger.level = "debug";

const url = require('url')

//【一】：常见的url配置使用
const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
const urlObj = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=3',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path/index.html',
    path: '/path/index.html?id=2',
    href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}
//1.【parse】 将请求字符串转成对象 :url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
/* logger.debug(url.parse(urlString)) */

//2.【format】将请求对象转成字符串  : url.format(urlObject)
/* logger.debug(url.format(urlObj)) */

//3. 【resolve】 :url.resolve(from, to)
/* logger.debug(url.resolve('http://www.abc.com/a', '../')) */

var a = url.resolve('/one/two/three', 'four')
var b = url.resolve('http://example.com/', '/one')
var c = url.resolve('http://example.com/one', '/two')
console.log(a + "," + b + "," + c)///one/two/four,http://example.com/one,http://example.com/two




// 日志打印方式：
//#region 1: console.log
/*
 const url = require('url')
 const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
 console.log(url.parse(urlString))
*/
//#region 

//#region 2:log4js方式
/* 
    var log4js = require("log4js"); //记录日志 npm i log4js 
    var logger = log4js.getLogger();
    logger.level = "debug";
    logger.debug("Some debug messages");
 */
//#endregion