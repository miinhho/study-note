import { myPromise } from "./";

Promise.all([
  myPromise("https://example.com"),
  myPromise("https://example.com")
]).then(([data1, data2]) => {
  console.log(data1, data2);
});
