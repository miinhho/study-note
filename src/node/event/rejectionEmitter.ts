import { EventEmitter } from "node:stream";

EventEmitter.captureRejections = true;

const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});
ee1.on('error', console.log);

const ee2 = new EventEmitter({ captureRejections: false });
ee2.on('something', async (value) => {
  throw new Error('kaboom');
});
ee2.on('error', console.log);

(ee2 as any)[Symbol.for('nodejs.rejection')] = console.log;

ee1.emit('something', 'value');
ee2.emit('something', 'value');
