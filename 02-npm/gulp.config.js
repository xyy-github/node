const {
    series, //让任务（task）按顺序执行
    parallel //以最大并发来运行的任务（tasks）
} = require('gulp')
const s1 = (cb) => {
    cb()
}
const s2 = cb => {
    cb()
}
const node_env=process.env.NODE_ENV
console.log(node_env)

exports.default = series(s1, s2);


//根目录运行npx gulp -f gulp.config.js