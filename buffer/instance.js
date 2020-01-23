const buffer = Buffer.from('This is a Test!');

console.log(buffer.length); // 15

const buffer1 = Buffer.alloc(10);
buffer1[0] = 2;

console.log(buffer1.length); // 10

const buffer2 = Buffer.allocUnsafe(10);
buffer1[0] = 2;

console.log(buffer2.length); // 10

console.log(buffer.toString()); // This is a Test!
console.log(buffer.toString('base64')); // 'This is a Test!' -> VGhpcyBpcyBhIFRlc3Qh

const buffer3 = Buffer.allocUnsafe(10);

console.log(buffer3);  // 随机分配：<Buffer 48 06 02 03 01 00 00 00 08 0a>
console.log(buffer3.fill(10, 2, 6)); // <Buffer 48 06 0a 0a 0a 0a 00 00 08 0a>

const buffer4 = Buffer.from('test');
const buffer5 = Buffer.from('test');
const buffer6 = Buffer.from('test!');

console.log(buffer4.equals(buffer5)); // true
console.log(buffer4.equals(buffer6)); // false

console.log(buffer4.indexOf('es')); // 1
console.log(buffer4.indexOf('esa')); // -1


