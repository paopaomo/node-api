const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const ce = new CustomEmitter();

ce.on('error', (error, time) => {
    console.log(error);
    console.log(time);
});

ce.emit('error', new Error('oops!'), Date.now());

