const fs = require('fs');
const path = require('path');

fs.rename(path.resolve(__dirname, 'text'), 'text.txt', err => {
    if(err) {
        throw err;
    }
    console.log('done!');
});
