import { myPromise } from "./";

Promise.resolve()
  .then(() => myPromise("https://example.com"))
  .then((data) => console.log(data))
  .then(() => myPromise("https://example.com"))
  .then((data) => console.log(data))
  .then(() => myPromise("https://example.com"))
  .then((data) => console.log(data))
  .then(() => myPromise("https://example.com"))
