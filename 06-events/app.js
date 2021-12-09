const EventEmitter = require('events')
class myEventEmitter extends EventEmitter {}
const event = new myEventEmitter()

// 绑定事件
event.on('play', value => {
    console.log(value)
})
//绑定事件（重复）
event.on('play', value => {
    console.log(value)
})
//执行事件
event.emit('play',"hello")