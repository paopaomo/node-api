const { basename, dirname, extname } = require('path');

const filePath = '/Users/yezi/study/nodejs/node-api/names.js';

console.log(basename(filePath)); // names.js
console.log(dirname(filePath)); // /Users/yezi/study/nodejs/node-api
console.log(extname(filePath)); // .js
