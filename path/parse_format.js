const { parse, format } = require('path');

const filePath = '/Users/yezi/study/nodejs/node-api/parse_format.js';

const result = parse(filePath);

console.log(result);
// result
// {
//     root: '/',
//     dir: '/Users/yezi/study/nodejs/node-api',
//     base: 'parse_format.js',
//     ext: '.js',
//     name: 'parse_format'
// }

console.log(format(result)); // /Users/yezi/study/nodejs/node-api/parse_format.js
