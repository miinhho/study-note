import { myPromise } from ".";

myPromise("https://example.com")
  .then(data => new Promise((resolve, reject) => {
    console.log(data)
    resolve(data)
    }).then(data => {
      // do something with data
    }).then(data => {
      // do something with data
  }))
  .then(data => {
    // do something with data
  })
  .catch(err => {
    console.error(err);
  });
