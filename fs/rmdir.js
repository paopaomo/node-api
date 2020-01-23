const fs = require('fs');
const path = require('path');

fs.rmdir(path.resolve(__dirname, 'test'), err => {
    if(err) {
        throw err;
    }
    console.log('done!');
});
