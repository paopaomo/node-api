const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, '../'), (err, files) => {
    if(err) {
        throw err;
    }
    console.log(files);
});

