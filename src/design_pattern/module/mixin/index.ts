import { publicMixin } from "./mixin.pattern";

const mixin = publicMixin();
console.log(mixin.min([1, 2, 3])); // 1

export { };
