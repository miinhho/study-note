import { EventEmitter } from 'node:stream';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});

myEmitter.emit('event');
myEmitter.emit('event');
