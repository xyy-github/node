const fs = require('fs')
const fspromise = require('fs').promises
//【一】文件夹常见操作
/*  1. 当前目录创建文件夹
        fs.mkdir('logs', (err) => {
            //错误优先的回调函数
            if (err) throw err
            console.log('文件夹创建成功')
        })
    2. 修改文件夹名字
        fs.rename('./logs', './mylogs', () => {
            console.log("修改名字成功")
        })
    3. 删除文件夹
        fs.rmdir('./mylogs', () => {
            console.log('删除成功')
        })
    4. 读取文件夹
        fs.readdir('./mylogs',(err,res)=>{
            console.log(res)
        })
 */


//【二】文件常见操作
/*  1. 创建log文件，写入hello
        fs.writeFile('./logs/log.log', "hello", (err) => {
            console.log(err)
        })
    2. 追加内容
        fs.appendFile('./logs/log.log','!!!',(err)=>{
            console.log('done')
        })
    3. 删除文件
        fs.unlink('./logs/log.log',(err)=>{
            console.log('done')
        })
    4. 查询文件
        fs.readFile('./logs/log.log',(err,res)=>{
            console.log(res)//<Buffer 68 65 6c 6c 6f>,由于是个buffer内容，所以需要转化
            })
      4.1 方法一：'utf-8'
        fs.readFile('./logs/log.log','utf-8',(err,res)=>{
            console.log(res)//buffer转化  hello
        })
      4.2 方法二：toString()
        fs.readFile('./logs/log.log',(err,res)=>{
            console.log(res.toString())//hello
        }) 
      4.3 异步
        fs.readFile('./logs/log.log', (err, res) => { 
            console.log(res.toString())
        })
        console.log('con')

      4.2 同步
        let content = fs.readFileSync('./logs/log.log') 
        console.log(content)
        console.log('con')
 */


/* ;
//利用promise异步读取文件
(async () => {
    let con =await fspromise.readFile('./logs/log.log')
    console.log(con.toString())
    console.log('con')
    //hello
    // con
})() */

//循环创建多文件
/* 
    for (let i = 0; i < 6; i++) {
        fs.writeFile(`./logs/log${i}.log`, `log-${i}`, (err, res) => {
            console.log('创建完成')
         })
    } 
*/

//循环读取多文件
/* function readfs(dir) {
    fs.readdir(dir, (err, content) => {
        content.forEach((value, index) => {
            let joinDir = `${dir}/${value}`
            fs.stat(joinDir, (err, stats) => {
                if (stats.isDirectory()) {
                    readfs(joinDir)
                } else {
                    fs.readFile(joinDir, (err, res) => {
                        console.log(res.toString())
                    })
                }
            })
        });
    })
}
readfs('./') */

//监听文件变化
fs.watch('./logs',(err)=>{ //包括修改文件名、文件内容、删除、新建文件
    console.log("文件变化")
})

//gulp底层同样使用watch等



// 运行：node app.js