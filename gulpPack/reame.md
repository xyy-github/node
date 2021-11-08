
1 安装
1.1 首先检查是否安装 node、npm、npx;
node --version
npm --version
npx --version
上述没安装的话，参考这里https://nodejs.org/en/
1.2 安装 gulp 工具并简单测试
● 全局安装:npm install --global gulp-cli
● 项目下创建 package.json（设置项目名、版本、描述信息等）:npm init
● 安装 gulp 开发时依赖 :npm install gulp -D
● 检查安装等 gulp 版本 :gulp -v
● 根目录下创建 gulpfile.js 文件 ，并运行

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask

根目录下执行：
gulp
输出：默认任务（task）将执行，因为任务为空，因此没有实际动作。

3.命名
使用不同编程语言，例如 TypeScript 或 Babel，通过修改 gulpfile.js 文件的扩展名来表明所用的编程语言并安装对应的转译模块。
● 对于 TypeScript，重命名为 gulpfile.ts 并安装 ts-node 模块。
● 对于 Babel，重命名为 gulpfile.babel.js 并安装 @babel/register 模块。

2 任务 TASK
每个 gulp 任务（task）都是一个异步的 JavaScript 函数，此函数是一个可以接收 callback 作为参数的函数，或者是一个返回 stream、promise、event emitter、child process 或 observable (后面会详细讲解) 类型值的函数。
2.1 任务类型（2种）
（1）公开任务:
 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。
（2）私有任务:
 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。
一个私有（private）类型的任务（task）在外观和行为上和其他任务（task）是一样的，但是不能够被用户直接调用。如需将一个任务（task）注册为公开（public）类型的，只需从 gulpfile 中导出（export）即可.
示例：
// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
    // body omitted
    cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
    // body omitted
    cb()
}

 exports.build = build;
 exports.default = series(clean, build) //顺序
2.2 任务组合执行（2种）
允许将多个独立的任务组合为一个更大的操作。
2.2.1 组合类型
const {
    series, //让任务（task）按顺序执行
    parallel //以最大并发来运行的任务（tasks）
} = require('gulp')
（1）series: 让任务（task）按顺序执行
const s1 = (cb) => {
    cb()
}
const s2 = cb => {
    cb()
}
exports.default = series(s1, s2);
（2）parallel: 以最大并发来运行的任务（tasks）
const s1 = (cb) => {
    cb()
}
const s2 = cb => {
    cb()
}
exports.default = parallel(s1, s2);
2.2.2 特点
 （1）series() 和 parallel() 可以互相嵌套至任意深度。
 
const s1 = (cb) => {
    cb()
}
const s2 = cb => {
    cb()
}
const s3 = cb => {
    cb()
}
exports.build = series(
        s1,
        parallel(
            s1,
            series(s1, s2)
        ),
        parallel(s1, s3),
        s3
    );
（2）这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。
const s1 = (cb) => {
    cb()
}
const s2 =series(s1,cb=>{//已经组合的操作
		cb()
})

...
...
...

exports.default = series(s1, parallel(s2, s3), s4, s5, s6)//任意数目
exports.default = series(s1, parallel(s2, s3), s4, s5, s6)
（3）允许在组合中进行改变，而不需要在单个任务（task）中进行条件判断。
const s1 = (cb) => {
    cb()
}
const s2 = (cb) => {
    cb()
}
const s3 = (cb) => {
    cb()
}
if(process.env.NODE_ENV==='production'){
 	exports.default=series(s1,s2)  
}else{
	exports.default=series(s1,s3)  
}

（4）当一个组合操作执行时，这个组合中的每一个任务每次被调用时都会被执行。例如，在两个不同的任务（task）之间调用的 clean 任务（task）将被执行两次，并且将导致不可预期的结果。因此，最好重构组合中的 clean 任务（task）。
//对于会重复执行的s1,最好重构
const s1 = (cb) => {
    cb()
}
const s2 = series(s1,(cb) => {
    cb()
})
const s3 = series(s1,(cb) => {
    cb()
})

exports.default=parallel(s2,s3) 



//重构
const s1 = (cb) => {
    cb()
}
const s2 = (cb) => {
    cb()
}
const s3 = (cb) => {
    cb()
}

exports.default=series(s1,parallel(s2,s3))  
2.3 任务完成通知（异步）
（1）当从任务（task）中返回 stream、promise、event emitter、child process 或 observable 时，成功或错误值将通知 gulp 是否继续执行或结束。如果任务（task）出错，gulp 将立即结束执行并显示该错误。
（2）当使用 series() 组合多个任务（task）时，任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。当使用 parallel() 组合多个任务（task）时，一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。
2.3.1 stream
const {src,pipe}=require('gulp')
                         
const s1 = () => {
    return src('*.js').pipe(dest('output'))  
  	// src   接受 glob 参数，并从文件系统中读取文件生成node流（stream），生成到内存中
    // pipe  用于连接转化流或可写流
    // dest  接受一个输出目录参数，生成一个node流作为终止流，将文件内容及文件属性写入到指定的目录中
    
    // symlink 类似的dest,但是创建的是链接而不是文件
}
exports.default=s1


2.3.2 promise
const s2 = () => {
    return  Promise.resolve("执行成功")
}
exports.default=s2


//包装，允许你使用 await 处理 promise，并使用其他同步代码。
const fs = require('fs');
async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json');
  console.log(version);
  await Promise.resolve('some result');
}
exports.default=asyncAwaitTask
2.3.3 event emitter
const {EventEmitter}=require('events')

const s3 = () => {
    const emitter = new EventEmitter();
    // Emit has to happen async otherwise gulp isn't listening yet
    setTimeout(() => emitter.emit('finish'), 250);
    return emitter;
}
exports.default = s3
2.3.4 使用callback
const fs = require('fs');

const s4=(cb)=>{
  //1: 任务（task）不返回任何内容,指示任务完成
	// 	return cb() 
  
  //2: 通过 callback 把任务（task）中的错误告知 gulp，请将 Error 作为 callback 的唯一参数
  // 	cb(new Error('err'))
  
  //3: 此callback 函数传递给另一个 API ，而不是自己调用它。
  fs.access('gulpfile.js',cb)
}
exports.default=s4
2.3.5 observable
const { of } = require('rxjs');

const s5 = () => {
    return of(1, 2, 3)
}
exports.default=s5
2.3.6 child process
const { exec } = require('child_process');

const s6 = () => {
    return exec('Date')
}
exports.default=s6
