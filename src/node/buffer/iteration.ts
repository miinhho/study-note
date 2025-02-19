import { Buffer } from "node:buffer";

const buf = Buffer.from([1, 2, 3]);

for (const byte of buf) {
  console.log(byte);  // 1, 2, 3
}

const buf1 = Buffer.from('hello world', 'utf8');
const copyBuffer = Buffer.alloc(buf1.length);

for (const [index, bytes] of buf1.entries()) {
  copyBuffer[index] = bytes;
}

console.log(copyBuffer.toString());  // hello world
