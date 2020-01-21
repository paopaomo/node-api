const { join } = require('path');

console.log(join('/user', 'local', 'bin')); // /user/local/bin
console.log(join('/user', '../local', 'bin')); // /local/bin
