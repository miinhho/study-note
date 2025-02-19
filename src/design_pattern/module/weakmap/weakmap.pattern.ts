const count = new WeakMap<WeakKey, number>();

class Counter {
  constructor() {
    count.set(this, 0);
  }

  get current() {
    return count.get(this);
  }

  increment() {
    const next = count.get(this)! + 1;
    count.set(this, next);
    return count;
  }

  decrement() {
    const next = count.get(this)! - 1;
    count.set(this, next);
    return count;
  }

  reset() {
    return count.set(this, 0);
  }
}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.current);  // 2
