
var log4js = require("log4js"); //记录日志 npm i log4js 
const logger = log4js.getLogger();
logger.level='debug'

const querystring = require('querystring')


const query1 = 'id=2&name=yaoyao&from=四川'
const query2 = 'id:2/name:yaoyao/from:四川'
const queryObj = {
    id: 2,
    name: "yaoyao",
    from: "北京"
}


// 1.【parse】: querystring.parse(str[, sep[, eq[, options]]])
logger.debug(querystring.parse(query1))
//[2021-12-06T10:32:34.938] [DEBUG] default - [Object: null prototype] { id: '2', name: 'yaoyao', from: '四川' }

// 2.【stringify】: querystring.stringify(obj[, sep[, eq[, options]]])
logger.debug(querystring.stringify(queryObj))
//[2021-12-06T10:34:52.752] [DEBUG] default - id=2&name=yaoyao&from=%E5%8C%97%E4%BA%AC

// 3.【escape】: querystring.escape(str)
logger.debug(querystring.escape(query1))
//[2021-12-06T10:37:03.225] [DEBUG] default - id%3D2%26name%3Dyaoyao%26from%3D%E5%9B%9B%E5%B7%9D

// 4.【unescape】: querystring.unescape(str)
logger.debug(querystring.unescape('id%3D2%26name%3Dyaoyao%26from%3D%E5%9B%9B%E5%B7%9D'))
//[2021-12-06T10:38:54.654] [DEBUG] default - id=2&name=yaoyao&from=四川

// 5.配合使用 stringify+unescape
const NewQuery= querystring.stringify(queryObj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string)
    }
})
logger.debug(NewQuery)
//[2021-12-06T13:52:14.446] [DEBUG] default - id=2&name=yaoyao&from=北京