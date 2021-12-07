var log4js = require("log4js");
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
module.exports=logger