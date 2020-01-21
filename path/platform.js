const { sep, delimiter, win32, posix } = require('path');

console.log(sep); // /
console.log(process.env.PATH); // /Users/yezi/.nvm/versions/node/v12.14.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
console.log(delimiter); // :
console.log(win32.delimiter); // ;
console.log(posix.delimiter); // :
