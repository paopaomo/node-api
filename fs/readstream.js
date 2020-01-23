const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.resolve(__dirname, './readstream.js'));

rs.pipe(process.stdout);
