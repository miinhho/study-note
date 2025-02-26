const privateMethod = {
  count: 10,

  get() {
    return this.count;
  },

  set(value: number) {
    this.count = value;
  },

  increase() {
    this.count++;
  },
};

export default class FacadePattern {
  get() {
    return privateMethod.get();
  }

  set(value: number) {
    privateMethod.set(value);
  }

  increase() {
    privateMethod.increase();
  }
};
