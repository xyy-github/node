const path = require('path')
console.log(path.resolve(__dirname,'../')) //__dirname当前文件所在的物理路径

const _=require('lodash')
function mychunk(arr){
    let arr2=_.chunk(arr,2)
    return arr2
}
module.exports=mychunk
