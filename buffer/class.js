console.log(Buffer.byteLength('test')); // 4
console.log(Buffer.byteLength('测试')); // 6

console.log(Buffer.isBuffer({})); // false
console.log(Buffer.isBuffer(Buffer.from([1,2,3]))); // true

const buffer1 = Buffer.from('This ');
const buffer2 = Buffer.from('is ');
const buffer3 = Buffer.from('a ');
const buffer4 = Buffer.from('test');
const buffer5 = Buffer.from('!');
const buffer = Buffer.concat([buffer1, buffer2, buffer3, buffer4, buffer5]);
console.log(buffer.toString());  // This is a test!


