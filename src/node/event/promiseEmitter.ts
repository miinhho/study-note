import { once } from "node:events";
import process from "node:process";
import { EventEmitter } from "node:stream";

const myEmitter = new EventEmitter();

async function foo() {
  await Promise.all([
    once(myEmitter, 'bar'), once(myEmitter, 'foo')
  ]);
  console.log('done');
}

process.nextTick(() => {
  myEmitter.emit('bar');
  myEmitter.emit('foo');
});

foo().then(() => console.log('done'));
