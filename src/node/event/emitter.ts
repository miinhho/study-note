import { EventEmitter } from "node:stream";

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');

myEmitter.on('event_params', function (this: MyEmitter, a, b) {
  console.log(a, b, this, this === myEmitter);
});

myEmitter.emit('event_params', 'a', 'b');
