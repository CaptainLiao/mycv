var events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on(`some_event`, function() {
    console.log(`some_event被触发了`)
})

eventEmitter.emit(`some_event`)