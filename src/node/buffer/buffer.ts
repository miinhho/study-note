import { Buffer } from "node:buffer";

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from("test");

const buf6 = Buffer.alloc(5);
buf6.write("hello");
console.log(buf6.toString());  // hello
console.log(buf6.write("world"));  // 5

const buf7 = Buffer.from('Hello World', 'utf8');

console.log(buf7.toString());  // Hello World
console.log(buf7.toString('hex'));  // 48656c6c6f20576f726c64
console.log(buf7.toString('base64'));  // SGVsbG8gV29ybGQ=
console.log(Buffer.from('Helloooo', 'utf8'));  // <Buffer 48 65 6c 6c 6f 6f 6f 6f>
console.log(Buffer.from('Helloooo', 'utf16le'));  // <Buffer 48 00 65 00 6c 00 6c 00 6f 00 6f 00 6f 00 6f 00>

const buf8 = Buffer.from('Hello');
console.log(buf8.length);  // 5
console.log(buf8.toString());  // "Hello"
console.log(buf8.toString('hex'));  // "48656c6c6f"
console.log(buf8.toString('base64'));  // "SGVsbG8"

console.log(buf8[0]);  // 72
buf8[0] = 65;  // 'H' -> 'A' 변경
console.log(buf8.toString());  // "Aello"
