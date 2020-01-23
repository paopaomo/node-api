const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.resolve(__dirname, './text'),
    'This is a Test!',
    { encoding: 'utf8' },
    err => {
        if(err) {
            throw err;
        }
        console.log('done!');
    }
);

const content = Buffer.from('This is a Test!');

fs.writeFile(
    path.resolve(__dirname, './bufferText'),
    content,
    err => {
        if(err) {
            throw err;
        }
        console.log('done!');
    }
);
