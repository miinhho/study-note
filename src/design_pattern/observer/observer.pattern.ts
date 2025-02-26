class Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(value: any) {
    console.log(`${this.name} observer updated ${value}`);
  }
}

class Observable {
  private observers: Set<Observer>;

  constructor() {
    this.observers = new Set();
  }

  subscribe(...observer: Observer[]) {
    observer.forEach(
      observer => this.observers.add(observer)
    );
  }

  unsubscribe(observer: Observer) {
    this.observers.delete(observer);
  }

  notify(value: any) {
    this.observers.forEach(
      observer => observer.update(value)
    );
  }
}


export {
  Observable, Observer
};

