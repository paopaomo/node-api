const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const ce = new CustomEmitter();

const fn1 = () => {
    console.log('fn1');
}

const fn2 = () => {
    console.log('fn2');
}

ce.on('test', fn1);
ce.on('test', fn2);

setInterval(() => {
    ce.emit('test');
}, 500)

setTimeout(() => {
    // ce.removeListener('test', fn2);
    // ce.removeListener('test', fn1);

    ce.removeAllListeners('test');
}, 1500)

