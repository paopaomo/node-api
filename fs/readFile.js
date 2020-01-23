const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, './readFile.js'), 'utf8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});

const data = fs.readFileSync(path.resolve(__dirname, './readFile.js'), 'utf8');
console.log(data);


