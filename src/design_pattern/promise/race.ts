import { myPromise } from ".";

Promise.race([
  myPromise('https://example.com'),
  myPromise('https://example.com'),
])
  .then(data => console.log(data));
