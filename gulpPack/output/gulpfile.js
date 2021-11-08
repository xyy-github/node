// 执行一个任务，根目录终端运行： gulp
// 任何导出（export）的函数都将注册到 gulp 的任务（task）系统中。
/*
 function defaultTask(cb) {
    cb();   
}
exports.default = defaultTask
 */

const {
    series, //顺序
    parallel, //最大并发
    src,
    dest,

} = require('gulp')
const {
    EventEmitter
} = require('events')
const fs = require('fs');
const {
    of
} = require('rxjs');
const {
    exec
} = require('child_process');

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

function livereload(cb) {
    // body omitted
    cb();
}
/* //if else 允许在组合中进行改变
if (process.env.NODE_ENV === 'production') {
    exports.build = build;
    // exports.default = series(clean, build) //顺序
    exports.default = parallel(clean, build) //最大并发

} else {
    // exports.default = parallel(clean, livereload) //最大并发
    //允许嵌套
    exports.build = series(
        clean,
        parallel(
            clean,
            series(clean, build)
        ),
        parallel(clean, livereload),
        livereload
    );
}
 */

/* 以下代码建议重构：*/
/* const s1 = (cb) => {
    cb()
}
const s2 = series(s1, sb => {
    cb();
})
const s3 = series(s1, sb => {
    cb();
})
exports.default =parallel (s2, s3); //重复s1
 */
// 重构为：
//返回 stream
const s1 = () => {
    // cb()
    return src('*.js').pipe(dest('output')) //将js复制到output
}
//返回 Promise
const s2 = () => {
    // cb()
    return Promise.resolve("执行成功")
}
//返回 EventEmitter
const s3 = () => {
    // cb()
    const emitter = new EventEmitter();
    // Emit has to happen async otherwise gulp isn't listening yet
    setTimeout(() => emitter.emit('finish'), 250);
    return emitter;
}
//返回callback
const s4 = (cb) => {
    //1: 任务（task）不返回任何内容,指示任务完成
    // 	return cb() 

    //2: 通过 callback 把任务（task）中的错误告知 gulp，请将 Error 作为 callback 的唯一参数
    // 	cb(new Error('err'))

    //3: 此callback 函数传递给另一个 API ，而不是自己调用它。
    fs.access('gulpfile.js', cb)
}
//返回 observable
const s5 = () => {
    return of(1, 2, 3)
}
//返回 child process
const s6 = () => {
  return   exec('date')
}
exports.default = series(s1, parallel(s2, s3), s4, s5, s6)
//#region  任务
/* 
1:任务类型
（1）公开任务: 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。
（2）私有任务: 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。一个私有（private）类型的任务（task）在外观和行为上和其他任务（task）是一样的，但是不能够被用户直接调用。如需将一个任务（task）注册为公开（public）类型的，只需从 gulpfile 中导出（export）即可。


2:组合任务执行，允许将多个独立的任务组合为一个更大的操作。
（1）series: 让任务（task）按顺序执行
（2）parallel: 以最大并发来运行的任务（tasks）
    特点：
    （1）series() 和 parallel() 可以互相嵌套至任意深度。
    （2）这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。
    （3）允许在组合中进行改变，而不需要在单个任务（task）中进行条件判断。
    （4）当一个组合操作执行时，这个组合中的每一个任务每次被调用时都会被执行。例如，在两个不同的任务（task）之间调用的 clean 任务（task）将被执行两次，并且将导致不可预期的结果。因此，最好重构组合中的 clean 任务（task）。
3: 
 */
//#endregion

//#region 命名
/* 
 使用不同编程语言，例如 TypeScript 或 Babel，通过修改 gulpfile.js 文件的扩展名来表明所用的编程语言并安装对应的转译模块。
    （1）对于 TypeScript，重命名为 gulpfile.ts 并安装 ts-node 模块。
    （2）对于 Babel，重命名为 gulpfile.babel.js 并安装 @babel/register 模块。
 */
//#endregion