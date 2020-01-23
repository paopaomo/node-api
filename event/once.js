const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{

}

const ce = new CustomEmitter();

ce.once('test', () => {
    console.log('test event');
});

setInterval(() => {
    ce.emit('test');
}, 500)

