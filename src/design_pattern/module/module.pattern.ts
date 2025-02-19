export default class Counter {
  private count: number = 0;

  constructor() { }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  get current(): number {
    return this.count;
  }

  reset(): void {
    this.count = 0;
  }
}
