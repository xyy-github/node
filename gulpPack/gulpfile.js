const {
    watch
} = require('gulp');

watch('src/*.js', {
        events: 'all'
        // 所有事件都将被监控
    }, {
        ignoreInitial: false
        // ignoreInitial：false，关联的任务（task）将在启动时执行；true：不会被立即执行的，而是要等到第一次文件修之后才执行。
    }, {
        queue: false
        //false:当前执行的任务（task）不会再次并发执行 ，任务运行修改-》新执行在队列等待-》上一次关联任务执行完之后才能运行;true:每次文件修改之后关联任务都将执行（有可能并发执行）
    }, {
        delay: 500
        // 每次文件修改之后关联任务都将执行（有可能并发执行）
    },
    function (cb) {
        // body omitted
        cb();
    }
);