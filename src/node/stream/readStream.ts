import { createReadStream } from 'node:fs';

const readStream = createReadStream(
  'example.txt',
  { encoding: 'utf8'}
);

readStream.on('data', (chunk) => {
  console.log('Received data: ', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading data');
});

readStream.on('error', (error) => {
  console.error('Error reading data: ', error);
});
