const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read(path.resolve(__dirname, './promisify.js'))
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err));

async function test() {
    try {
        const content = await read(path.resolve(__dirname, './promisify.js'));
        console.log(content.toString());
    } catch(e) {
        console.log(e);
    }
}

test();

