const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const buffer = Buffer.from('中文字符串');

for(let i = 0; i < buffer.length; i += 5) {
    const b = Buffer.alloc(5);
    buffer.copy(b, 0, i);
    console.log(b.toString());
}
// 中�
// �字�
// ��串

for(let i = 0; i < buffer.length; i += 5) {
    const b = Buffer.alloc(5);
    buffer.copy(b, 0, i);
    console.log(decoder.write(b));
}
// 中
// 文字
// 符串
