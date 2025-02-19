import { EventEmitter } from "node:stream";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});

myEmitter.emit('event');
