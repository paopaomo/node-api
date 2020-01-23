const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

ce.on('test', () => {
    console.log('This is a Test!');
});

setInterval(() => {
    ce.emit('test');
}, 500)

