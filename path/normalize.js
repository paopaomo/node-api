const { normalize } = require('path');

console.log(normalize('/user/local/bin')); // /user/local/bin
console.log(normalize('/user//local/bin')); // /user/local/bin
console.log(normalize('/user//local/../bin')); // /user/bin
