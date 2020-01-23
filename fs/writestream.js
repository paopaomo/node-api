const fs = require('fs');
const path = require('path');

const ws = fs.createWriteStream(path.resolve(__dirname, './test.txt'));

const timer = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    console.log(num);
    if(num < 7) {
        ws.write(num + '');
    } else {
        clearInterval(timer);
        ws.end();
    }
}, 200);

ws.on('finish', () => {
    console.log('done!');
});
