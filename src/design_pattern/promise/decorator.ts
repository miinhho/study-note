import { myPromise } from '.';

function decorate(fn: any) {
  return function (...args: any[]) {
    console.log('decorator start');
    return fn(...args).then((result: any) => {
      console.log('decorator end');
      return result;
    });
  }
}

const myPromiseDecorator = decorate(myPromise);

myPromiseDecorator('https://example.com')
  .then((response: any) => console.log(response))
  .catch((error: any) => console.error(error));
