'use strict'
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b);
});
myEmitter.emit('event', '1', '2');
