import { myPromise } from "./";

myPromise("https://example.com")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

export { };
