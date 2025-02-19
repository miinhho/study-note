import { EventEmitter } from "node:stream";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});

myEmitter.emit('error', new Error('whoops!'));
