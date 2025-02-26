import Counter from "./module.pattern";

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.current);  // 2

counter.decrement();

console.log(counter.current);  // 1

counter.reset();

console.log(counter.current);  // 0

export { };
