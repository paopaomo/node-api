const fs = require('fs');
const path = require('path');

fs.unlink(path.resolve(__dirname, 'text'), err => {
    if(err) {
        throw err;
    }
    console.log('done!');
});
